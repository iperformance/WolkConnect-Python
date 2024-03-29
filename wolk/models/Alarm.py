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
Alarm Module.
"""


class Alarm:
    """Alarm event that ocurred on device."""

    def __init__(self, reference, active, timestamp=None):
        """
        Information about alarm event.

        :param reference: Alarm reference
        :type reference: str
        :param active: Current state of the alarm
        :type active: bool
        :param timestamp: Unix timestamp. If not provided, platform will assign
        :type timestamp: int or None
        """
        self.reference = reference
        self.active = active
        self.timestamp = timestamp
