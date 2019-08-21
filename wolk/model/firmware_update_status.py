"""Information about the current status of the firmware update process."""
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

from dataclasses import dataclass
from typing import Optional

from wolk.model.firmware_update_status_type import FirmwareUpdateStatusType
from wolk.model.firmware_update_error_type import FirmwareUpdateErrorType


@dataclass
class FirmwareUpdateStatus:
    """Contains the status of the firmware update process.

    :ivar status: The status of the firmware update process
    :ivartype status: FirmwareUpdateStatusType or None
    :ivar error: The type of error that occurred
    :ivartype error: FirmwareUpdateErrorType or None
    """

    status: Optional[FirmwareUpdateStatusType]
    error: Optional[FirmwareUpdateErrorType]
