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
"""
Configuration Provider module.

Contains ConfigurationProvider "interface".
"""


class ConfigurationProvider:
    """
    Must be implemented to read the device's configuration values.

    The configuration values are then sent to WolkAbout IoT Platform.
    """

    def get_configuration(self):
        """
        Read device configuration and return it as a dictionary.

        With device configuration reference as key,
        and device configuration value as value.

        Must be implemented as non blocking.
        Must be implemented as thread safe.

        :returns: configuration
        :rtype: dict
        """
        pass
