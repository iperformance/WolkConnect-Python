"""Enables firmware update for device."""
#   Copyright 2018 WolkAbout Technology s.r.o.
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.

from typing import Callable
from threading import Timer
import os

from wolk.model.firmware_update_error_type import FirmwareUpdateErrorType
from wolk.model.firmware_update_status import FirmwareUpdateStatus
from wolk.model.firmware_update_status_type import FirmwareUpdateStatusType
from wolk.interface.firmware_update import FirmwareUpdate
from wolk.interface.firmware_handler import FirmwareHandler
from wolk import LoggerFactory


class OSFirmwareUpdate(FirmwareUpdate):
    """Responsible for everything related to the firmware update process."""

    def __init__(self, firmware_handler: FirmwareHandler = None) -> None:
        """
        Enable firmware update for device.

        :param firmware_handler: Function that will handle the installation
        :type firmware_handler: Callable[[str], None]
        """
        self.logger = LoggerFactory.logger_factory.get_logger(
            str(self.__class__.__name__)
        )
        self.logger.debug(f"firmware_handler: {firmware_handler}")
        self.current_status = FirmwareUpdateStatus()
        self.install_timer = None
        self._set_firmware_handler(firmware_handler)

    def _set_on_status_callback(
        self, report_status: Callable[[FirmwareUpdateStatus], None]
    ) -> None:
        """
        Set the callback function for reporting firmware status.

        :param report_status: Reporting firmware update status
        :type report_status: Callable[[FirmwareUpdateStatus], None]
        """
        self.logger.debug(f"firmware update status callback: {report_status}")
        self.report_self.current_status = report_status

    def _set_firmware_handler(self, handler: FirmwareHandler) -> None:
        """Set firmware handler.

        :param handler: Installs firmware and reports current version
        :type handler: FirmwareHandler

        :raises ValueError: handler not an instance of FirmwareHandler
        """
        self.logger.debug(f"set handler: {handler}")

        if not isinstance(handler, FirmwareHandler):
            raise ValueError(
                f"Given handler {handler} is not "
                "an instance of FirmwareHandler"
            )

        self.handler = handler

    def handle_install(self, file_path: str) -> None:
        """Handle received firmware installation command.

        :param file_path: Firmware file to install
        :type file_path: str
        """
        self.logger.debug(
            f"Handling install command with path path: {file_path}"
        )
        if not self.handler:

            self.current_status = FirmwareUpdateStatus(
                FirmwareUpdateStatusType.ERROR,
                FirmwareUpdateErrorType.UNSPECIFIED_ERROR,
            )
            self.logger.error("No firmware handler set!")
            self.report_status(self.current_status)
            self._reset_state()
            return

        if self.current_status.state is not None:

            self.logger.warning("Not in idle state, ignoring install command.")
            return

        if os.path.exists("last_firmware_version.txt"):
            self.current_status = FirmwareUpdateStatus(
                FirmwareUpdateStatusType.ERROR,
                FirmwareUpdateErrorType.UNSPECIFIED_ERROR,
            )
            self.logger.error("Previous firmware update did not complete!")
            self.report_status(self.current_status)
            self._reset_state()
            return

        if not os.path.exists(file_path):
            self.current_status = FirmwareUpdateStatus(
                FirmwareUpdateStatusType.ERROR,
                FirmwareUpdateErrorType.FILE_NOT_PRESENT,
            )
            self.logger.error("File not present at given path!")
            self.report_status(self.current_status)
            self._reset_state()
            return

        with open("last_firmware_version.txt", "w") as file:
            file.write(self.handler.get_current_version())

        self.current_status = FirmwareUpdateStatus(
            FirmwareUpdateStatusType.INSTALLATION
        )
        self.logger.info(
            "Beginning firmware installation process "
            f"with file path: {file_path}"
        )
        self.report_status(self.current_status)

        self.install_timer = Timer(
            5.0, self.handler.install_firmware(file_path)
        )  # For possible abort command
        self.install_timer.start()

    def handle_abort(self) -> None:
        """Handle the abort command received from the platform."""
        if self.install_timer:
            self.logger.info("Stopping installation timer")
            self.install_timer.cancel()

        if self.current_status.status is not None:

            self.logger.info("Aborting firmware installation")
            self.current_status = FirmwareUpdateStatus(
                FirmwareUpdateStatusType.ABORTED
            )
            self.report_status(self.current_status)
            self._reset_state()
            if os.path.exists("last_firmware_version.txt"):
                os.remove("last_firmware_version.txt")

    def report_result(self) -> None:
        """Report the result of the firmware installation process."""
        self.logger.debug("Reporting firmware update result")

        if not os.path.exists("last_firmware_version.txt"):
            self.logger.debug("No stored firmware version found")
            return

        with open("last_firmware_version.txt") as file:
            last_firmware_version = file.read()

        if last_firmware_version == self.handler.get_current_version():
            self.logger.warning(
                "Firmware version unchanged, reporting installation failed"
            )
            self.current_status = FirmwareUpdateStatus(
                FirmwareUpdateStatusType.ERROR,
                FirmwareUpdateErrorType.INSTALLATION_FAILED,
            )
            self.report_status(self.current_status)
            self._reset_state()
            os.remove("last_firmware_version.txt")
            return

        self.logger.info(
            "Firmware version changed, reporting installation completed"
        )
        self.current_status = FirmwareUpdateStatus(
            FirmwareUpdateStatusType.COMPLETED
        )
        self.report_status(self.current_status)
        # TODO: on completed, wolk call handler get version and report
        self._reset_state()
        os.remove("last_firmware_version.txt")

    def _reset_state(self) -> None:
        """Reset the state of the firmware update process."""
        self.current_status = FirmwareUpdateStatus()
        self.install_timer = None