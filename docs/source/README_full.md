```sh

██╗    ██╗ ██████╗ ██╗     ██╗  ██╗ ██████╗ ██████╗ ███╗   ██╗███╗   ██╗███████╗ ██████╗████████╗
██║    ██║██╔═══██╗██║     ██║ ██╔╝██╔════╝██╔═══██╗████╗  ██║████╗  ██║██╔════╝██╔════╝╚══██╔══╝
██║ █╗ ██║██║   ██║██║     █████╔╝ ██║     ██║   ██║██╔██╗ ██║██╔██╗ ██║█████╗  ██║        ██║   
██║███╗██║██║   ██║██║     ██╔═██╗ ██║     ██║   ██║██║╚██╗██║██║╚██╗██║██╔══╝  ██║        ██║   
╚███╔███╔╝╚██████╔╝███████╗██║  ██╗╚██████╗╚██████╔╝██║ ╚████║██║ ╚████║███████╗╚██████╗   ██║   
 ╚══╝╚══╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═══╝╚══════╝ ╚═════╝   ╚═╝   
                                                                                                 
                                           ██████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ███╗   ██╗ 
                                           ██╔══██╗╚██╗ ██╔╝╚══██╔══╝██║  ██║██╔═══██╗████╗  ██║ 
                                     █████╗██████╔╝ ╚████╔╝    ██║   ███████║██║   ██║██╔██╗ ██║ 
                                     ╚════╝██╔═══╝   ╚██╔╝     ██║   ██╔══██║██║   ██║██║╚██╗██║ 
                                           ██║        ██║      ██║   ██║  ██║╚██████╔╝██║ ╚████║ 
                                           ╚═╝        ╚═╝      ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ 
                                                                                                 

```
----
WolkAbout Python Connector library for connecting devices to [WolkAbout IoT Platform](https://demo.wolkabout.com/#/login).

Supported device communication protocols:
* JSON_SINGLE
* JSON_PROTOCOL

*Note:* Firmware update is currently not available for JSON_PROTOCOL
## Prerequisite

* Python 3


## Installation

```sh
pip3 install wolk-connect
```

### Installing from source

Clone this repository from the command line using:
```sh
git clone https://github.com/Wolkabout/WolkConnect-Python.git
```

Install dependencies by invoking `pip3 install -r requirements.txt`

Install the package by running:
```python
py setup.py install
```

## Example Usage

**Establishing connection with WolkAbout IoT platform:**

Create a device on WolkAbout IoT platform by importing [Full-example-deviceTemplate.json](https://github.com/Wolkabout/WolkConnect-Python/blob/master/examples/full_feature_set/Full-example-deviceTemplate.json) .<br />
This manifest fits [wolk_example.py](https://github.com/Wolkabout/WolkConnect-Python/blob/master/examples/full_feature_set/wolk_example.py) and demonstrates all the functionality of WolkConnect-Python library.

```python
import wolk

# Setup device credentials which you got
# when the device was created on the platform
device = wolk.Device(
    key="device_key",
    password="some_password",
    actuator_references=["SW", "SL"]
)

# Provide implementation of a way to read actuator status
class ActuatorStatusProviderImpl(wolk.ActuatorStatusProvider):
    def get_actuator_status(self, reference):
        if reference == "SW":
            return wolk.ActuatorState.READY, switch.value
        elif reference == "SL":
            return wolk.ActuatorState.READY, slider.value


# Provide implementation of an actuation handler
class ActuationHandlerImpl(wolk.ActuationHandler):
    def handle_actuation(self, reference, value):
        print("Setting actuator " + reference + " to value: " + str(value))
        if reference == "SW":
            switch.value = value

        elif reference == "SL":
            slider.value = value

# Provide implementation of a configuration handler
class ConfigurationHandlerImpl(wolk.ConfigurationHandler):

    def handle_configuration(self, configuration):
        for key, value in configuration.items():
            if key == "config_1":
                configuration_1.value = value
            elif key == "config_2":
                configuration_2.value = value
            elif key == "config_3":
                configuration_3.value = value
            elif key == "config_4":
                configuration_4.value = value

# Provide a way to read current device configuration
class ConfigurationProviderImpl(wolk.ConfigurationProvider):

    def get_configuration(self):
        configuration = dict()
        configuration['config_1'] = configuration_1.value
        configuration['config_2'] = configuration_2.value
        configuration['config_3'] = configuration_3.value
        configuration['config_4'] = configuration_4.value
        return configuration

# Pass your device, actuation handler and actuator status provider
# Select formatting protocol: JSON_SINGLE (default) or JSON_PROTOCOL
# Pass configuration handler and provider
# Pass server info and path to ca.crt for secure connection
# defaults to secure connection to Demo instance - comment out host, port and ca_cert
wolk_device = wolk.WolkConnect(
    device=device,
    protocol=wolk.Protocol.JSON_SINGLE,
    actuation_handler=ActuationHandlerImpl(),
    actuator_status_provider=ActuatorStatusProviderImpl(),
    configuration_handler=ConfigurationHandlerImpl(),
    configuration_provider=ConfigurationProviderImpl(),
    host="api-demo.wolkabout.com",
    port=8883,
    ca_cert="path/to/ca.crt"
)

wolk_device.connect()
```

### Adding sensor readings
```python
wolk_device.add_sensor_reading("T", 26.93)

# Multi-value sensor reading
wolk_device.add_sensor_reading("ACL", (4, 2, 0))
```

### Adding events
```python
# Activate alarm
wolk_device.add_alarm("HH", True)
# Disable alarm
wolk_device.add_alarm("HH", False)
```

### Data publish strategy
Stored sensor readings and alarms, as well as current actuator statuses are pushed to WolkAbout IoT platform on demand by calling:
```python
wolk_device.publish()
```

### Publishing actuator statuses
```python
wolk_device.publish_actuator_status("SW")
```
This will call the `ActuatorStatusProvider` to read the actuator status, and publish actuator status.


### Publishing configuration
```python
wolk_device.publish_configuration()
```
This will call the `ConfigurationProvider` to read the current configuration and publish it to the platform


### Disconnecting from the platform
```python
wolk_device.disconnect()
```

### Data persistence

WolkAbout Python Connector provides a mechanism for persisting data in situations where readings can not be sent to WolkAbout IoT platform.

Persisted readings are sent to WolkAbout IoT platform once connection is established.
Data persistence mechanism used **by default** stores data in-memory by using `collections.deque`.

In cases when provided in-file persistence is suboptimal, one can use custom persistence by implementing `OutboundMessageQueue`, and forwarding it to the constructor in the following manner:

```python
wolk_device = wolk.WolkConnect(
    device=device,
    actuation_handler=ActuationHandlerImpl(),
    actuator_status_provider=ActuatorStatusProviderImpl(),
    outbound_message_queue=custom_queue
)
wolk_device.connect()
```

For more info on persistence mechanism see `OutboundMessageQueue` class


### Firmware update

WolkAbout Python Connector provides a mechanism for updating device firmware.
By default this feature is disabled. See code snippet below on how to enable device firmware update.

```python
# Extend this class to handle the installing of the firmware file
class MyFirmwareInstaller(wolk.FirmwareInstaller):

    def __init__(self):
        pass

    def install_firmware(self, firmware_file_path):
        """
        Handle the installing of the firmware file here
        """
        print("Updating firmware with file '{}'".format(firmware_file_path))
        # Handle the installation process


# Enable firmware update on your device
# Implement wolk.FirmwareURLDownloadHandler to enable URL download
firmware_handler = wolk.FileSystemFirmwareHandler(
    version="1.0",
    chunk_size=1024 * 1024,
    max_file_size=100 * 1024 * 1024,
    download_location='',
    firmware_installer=MyFirmwareInstaller(),
    firmware_url_download_handler=None
)

# Pass your device, actuation handler and actuator status provider
# Enable firmware update by passing a firmware handler
wolk_device = wolk.WolkConnect(
    device=device,
    actuation_handler=ActuationHandlerImpl(),
    actuator_status_provider=ActuatorStatusProviderImpl(),
    firmware_handler=firmware_handler
)
```

### Keep Alive Mechanism

WolkAbout Python Connector by default uses Keep Alive mechanism to notify WolkAbout IoT Platform that device is still connected. Keep alive message is sent to WolkAbout IoT Platform every 10 minutes.

To reduce network usage Keep Alive mechanism can be disabled in following manner:

```python
wolk_device = wolk.WolkConnect(
    device=device,
    actuation_handler=ActuationHandlerImpl(),
    actuator_status_provider=ActuatorStatusProviderImpl(),
    keep_alive_enabled=False
)
```

### Debugging
Logging is enabled by default to info level.

Call the following function to change logging level to:
 * info (default)
 * debug
 * notset

Optionally, specify a log file to which to store logging messages.

```python
# Enable debug logging to file
wolk.logging_config("debug", "wolk.log")
```
