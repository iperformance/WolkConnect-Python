Search.setIndex({docnames:["README_full","README_simple","WolkConnect-Functional-Documentation","examples","functional","index","modules","wolk","wolk.wolkcore"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["README_full.md","README_simple.md","WolkConnect-Functional-Documentation.md","examples.rst","functional.rst","index.rst","modules.rst","wolk.rst","wolk.wolkcore.rst"],objects:{"":{wolk:[7,0,0,"-"]},"wolk.ActuationHandler":{ActuationHandler:[7,1,1,""]},"wolk.ActuationHandler.ActuationHandler":{handle_actuation:[7,2,1,""]},"wolk.ActuatorStatusProvider":{ActuatorStatusProvider:[7,1,1,""]},"wolk.ActuatorStatusProvider.ActuatorStatusProvider":{get_actuator_status:[7,2,1,""]},"wolk.ConfigurationHandler":{ConfigurationHandler:[7,1,1,""]},"wolk.ConfigurationHandler.ConfigurationHandler":{handle_configuration:[7,2,1,""]},"wolk.ConfigurationProvider":{ConfigurationProvider:[7,1,1,""]},"wolk.ConfigurationProvider.ConfigurationProvider":{get_configuration:[7,2,1,""]},"wolk.Device":{Device:[7,1,1,""]},"wolk.FileSystemFirmwareHandler":{FileSystemFirmwareHandler:[7,1,1,""]},"wolk.FileSystemFirmwareHandler.FileSystemFirmwareHandler":{persist_version:[7,2,1,""],read_chunk:[7,2,1,""],set_url_download_result_callback:[7,2,1,""],unpersist_version:[7,2,1,""],update_abort:[7,2,1,""],update_finalize:[7,2,1,""],update_start:[7,2,1,""],update_start_url_download:[7,2,1,""],write_chunk:[7,2,1,""]},"wolk.FirmwareInstaller":{FirmwareInstaller:[7,1,1,""]},"wolk.FirmwareInstaller.FirmwareInstaller":{install_firmware:[7,2,1,""]},"wolk.FirmwareURLDownloadHandler":{FirmwareURLDownloadHandler:[7,1,1,""]},"wolk.FirmwareURLDownloadHandler.FirmwareURLDownloadHandler":{download:[7,2,1,""]},"wolk.LoggerFactory":{LoggerFactory:[7,1,1,""],logging_config:[7,3,1,""]},"wolk.LoggerFactory.LoggerFactory":{get_logger:[7,2,1,""]},"wolk.OSFirmwareUpdate":{OSFirmwareUpdate:[7,1,1,""]},"wolk.OSFirmwareUpdate.OSFirmwareUpdate":{handle_abort:[7,2,1,""],handle_file_upload:[7,2,1,""],handle_install:[7,2,1,""],handle_packet:[7,2,1,""],handle_url_download:[7,2,1,""],handle_url_download_result:[7,2,1,""],report_result:[7,2,1,""],reset_state:[7,2,1,""],set_on_file_packet_request_callback:[7,2,1,""],set_on_status_callback:[7,2,1,""],validate_firmware_file:[7,2,1,""],validate_packet:[7,2,1,""]},"wolk.OSInboundMessageDeserializer":{OSInboundMessageDeserializer:[7,1,1,""]},"wolk.OSInboundMessageDeserializer.OSInboundMessageDeserializer":{deserialize_actuator_command:[7,2,1,""],deserialize_configuration_command:[7,2,1,""],deserialize_firmware_chunk:[7,2,1,""],deserialize_firmware_command:[7,2,1,""]},"wolk.OSKeepAliveService":{OSKeepAliveService:[7,1,1,""],RepeatingTimer:[7,1,1,""]},"wolk.OSKeepAliveService.OSKeepAliveService":{handle_pong:[7,2,1,""],send_keep_alive:[7,2,1,""],start:[7,2,1,""],stop:[7,2,1,""]},"wolk.OSKeepAliveService.RepeatingTimer":{callback:[7,2,1,""],cancel:[7,2,1,""],start:[7,2,1,""]},"wolk.OSMQTTConnectivityService":{OSMQTTConnectivityService:[7,1,1,""]},"wolk.OSMQTTConnectivityService.OSMQTTConnectivityService":{connect:[7,2,1,""],disconnect:[7,2,1,""],on_mqtt_connect:[7,2,1,""],on_mqtt_disconnect:[7,2,1,""],on_mqtt_message:[7,2,1,""],publish:[7,2,1,""],set_inbound_message_listener:[7,2,1,""]},"wolk.OSOutboundMessageFactory":{OSOutboundMessageFactory:[7,1,1,""]},"wolk.OSOutboundMessageFactory.OSOutboundMessageFactory":{make_from_actuator_status:[7,2,1,""],make_from_alarm:[7,2,1,""],make_from_chunk_request:[7,2,1,""],make_from_configuration:[7,2,1,""],make_from_firmware_status:[7,2,1,""],make_from_firmware_version:[7,2,1,""],make_from_keep_alive_message:[7,2,1,""],make_from_sensor_reading:[7,2,1,""]},"wolk.OSOutboundMessageQueue":{OSOutboundMessageQueue:[7,1,1,""]},"wolk.OSOutboundMessageQueue.OSOutboundMessageQueue":{get:[7,2,1,""],peek:[7,2,1,""],put:[7,2,1,""]},"wolk.WolkConnect":{WolkConnect:[7,1,1,""]},"wolk.WolkConnect.WolkConnect":{add_alarm:[7,2,1,""],add_sensor_reading:[7,2,1,""],connect:[7,2,1,""],disconnect:[7,2,1,""],publish:[7,2,1,""],publish_actuator_status:[7,2,1,""],publish_configuration:[7,2,1,""]},"wolk.wolkcore":{ActuatorCommand:[8,0,0,"-"],ActuatorCommandType:[8,0,0,"-"],ActuatorStatus:[8,0,0,"-"],Alarm:[8,0,0,"-"],ConfigurationCommand:[8,0,0,"-"],ConfigurationCommandType:[8,0,0,"-"],ConnectivityService:[8,0,0,"-"],FileTransferPacket:[8,0,0,"-"],FirmwareCommand:[8,0,0,"-"],FirmwareCommandType:[8,0,0,"-"],FirmwareErrorType:[8,0,0,"-"],FirmwareHandler:[8,0,0,"-"],FirmwareStatus:[8,0,0,"-"],FirmwareStatusType:[8,0,0,"-"],FirmwareUpdate:[8,0,0,"-"],FirmwareUpdateStateType:[8,0,0,"-"],InboundMessage:[8,0,0,"-"],InboundMessageDeserializer:[8,0,0,"-"],KeepAliveService:[8,0,0,"-"],OutboundMessage:[8,0,0,"-"],OutboundMessageFactory:[8,0,0,"-"],OutboundMessageQueue:[8,0,0,"-"],SensorReading:[8,0,0,"-"],WolkCore:[8,0,0,"-"]},"wolk.wolkcore.ActuatorCommand":{ActuatorCommand:[8,1,1,""]},"wolk.wolkcore.ActuatorStatus":{ActuatorStatus:[8,1,1,""]},"wolk.wolkcore.Alarm":{Alarm:[8,1,1,""]},"wolk.wolkcore.ConfigurationCommand":{ConfigurationCommand:[8,1,1,""]},"wolk.wolkcore.ConnectivityService":{ConnectivityService:[8,1,1,""]},"wolk.wolkcore.ConnectivityService.ConnectivityService":{connect:[8,2,1,""],disconnect:[8,2,1,""],publish:[8,2,1,""],set_inbound_message_listener:[8,2,1,""]},"wolk.wolkcore.FileTransferPacket":{FileTransferPacket:[8,1,1,""]},"wolk.wolkcore.FirmwareCommand":{FirmwareCommand:[8,1,1,""]},"wolk.wolkcore.FirmwareHandler":{FirmwareHandler:[8,1,1,""]},"wolk.wolkcore.FirmwareHandler.FirmwareHandler":{persist_version:[8,2,1,""],read_chunk:[8,2,1,""],set_url_download_result_callback:[8,2,1,""],unpersist_version:[8,2,1,""],update_abort:[8,2,1,""],update_finalize:[8,2,1,""],update_start:[8,2,1,""],update_start_url_download:[8,2,1,""],write_chunk:[8,2,1,""]},"wolk.wolkcore.FirmwareStatus":{FirmwareStatus:[8,1,1,""]},"wolk.wolkcore.FirmwareUpdate":{FirmwareUpdate:[8,1,1,""]},"wolk.wolkcore.FirmwareUpdate.FirmwareUpdate":{handle_abort:[8,2,1,""],handle_file_download:[8,2,1,""],handle_install:[8,2,1,""],handle_packet:[8,2,1,""],handle_url_download:[8,2,1,""],handle_url_download_result:[8,2,1,""],report_result:[8,2,1,""],set_on_file_packet_request_callback:[8,2,1,""],set_on_status_callback:[8,2,1,""]},"wolk.wolkcore.InboundMessage":{InboundMessage:[8,1,1,""]},"wolk.wolkcore.InboundMessageDeserializer":{InboundMessageDeserializer:[8,1,1,""]},"wolk.wolkcore.InboundMessageDeserializer.InboundMessageDeserializer":{deserialize_actuator_command:[8,2,1,""],deserialize_configuration_command:[8,2,1,""],deserialize_firmware_chunk:[8,2,1,""],deserialize_firmware_command:[8,2,1,""]},"wolk.wolkcore.KeepAliveService":{KeepAliveService:[8,1,1,""]},"wolk.wolkcore.KeepAliveService.KeepAliveService":{handle_pong:[8,2,1,""],start:[8,2,1,""],stop:[8,2,1,""]},"wolk.wolkcore.OutboundMessage":{OutboundMessage:[8,1,1,""]},"wolk.wolkcore.OutboundMessageFactory":{OutboundMessageFactory:[8,1,1,""]},"wolk.wolkcore.OutboundMessageFactory.OutboundMessageFactory":{make_from_actuator_status:[8,2,1,""],make_from_alarm:[8,2,1,""],make_from_chunk_request:[8,2,1,""],make_from_configuration:[8,2,1,""],make_from_firmware_status:[8,2,1,""],make_from_firmware_version:[8,2,1,""],make_from_keep_alive_message:[8,2,1,""],make_from_sensor_reading:[8,2,1,""]},"wolk.wolkcore.OutboundMessageQueue":{OutboundMessageQueue:[8,1,1,""]},"wolk.wolkcore.OutboundMessageQueue.OutboundMessageQueue":{get:[8,2,1,""],peek:[8,2,1,""],put:[8,2,1,""]},"wolk.wolkcore.SensorReading":{SensorReading:[8,1,1,""]},"wolk.wolkcore.WolkCore":{WolkCore:[8,1,1,""]},"wolk.wolkcore.WolkCore.WolkCore":{add_alarm:[8,2,1,""],add_sensor_reading:[8,2,1,""],connect:[8,2,1,""],disconnect:[8,2,1,""],publish:[8,2,1,""],publish_actuator_status:[8,2,1,""],publish_configuration:[8,2,1,""]},wolk:{ActuationHandler:[7,0,0,"-"],ActuatorStatusProvider:[7,0,0,"-"],ConfigurationHandler:[7,0,0,"-"],ConfigurationProvider:[7,0,0,"-"],Device:[7,0,0,"-"],FileSystemFirmwareHandler:[7,0,0,"-"],FirmwareInstaller:[7,0,0,"-"],FirmwareURLDownloadHandler:[7,0,0,"-"],LoggerFactory:[7,0,0,"-"],OSFirmwareUpdate:[7,0,0,"-"],OSInboundMessageDeserializer:[7,0,0,"-"],OSKeepAliveService:[7,0,0,"-"],OSMQTTConnectivityService:[7,0,0,"-"],OSOutboundMessageFactory:[7,0,0,"-"],OSOutboundMessageQueue:[7,0,0,"-"],WolkConnect:[7,0,0,"-"],wolkcore:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"abstract":[2,4],"byte":[7,8],"case":[0,2,4,7,8],"class":[0,7,8],"default":[0,2,4],"final":7,"float":[7,8],"function":[0,5,7,8],"import":[0,1,2,4],"int":[7,8],"new":7,"return":[0,7,8],"switch":[2,4],"true":[0,2,4,7,8],For:[0,2,4,7],GPS:[2,4],TLS:7,The:[2,4,5,7,8],Then:[2,4],These:[2,4],Used:7,Using:[2,4],__init__:0,_on_inbound_messag:8,abc:7,abl:[2,4],abort:[7,8],about:[1,7,8],acceleromet:[2,4],achiev:[2,4],acl:0,activ:[0,2,4,7,8],actuat:[5,7,8],actuation_handl:[0,7,8],actuationhandl:[0,5,6,8],actuationhandlerimpl:0,actuator_1:0,actuator_2:0,actuator_command_type_set:8,actuator_command_type_statu:8,actuator_command_type_unknown:8,actuator_refer:[0,7],actuator_reference_on:0,actuator_reference_two:0,actuator_state_busi:[7,8],actuator_state_error:[7,8],actuator_state_readi:[0,7,8],actuator_status_provid:[0,7,8],actuatorcommand:7,actuatorst:7,actuatorstatu:7,actuatorstatusprovid:[0,5,6,8],actuatorstatusproviderimpl:0,adapt:[2,4],add:7,add_alarm:[0,7,8],add_sensor_read:[0,1,7,8],addit:[2,4,7],address:7,after:[2,4,7],alarm:[0,5,7],alarm_refer:0,aliv:[5,7,8],all:[0,2,4,7,8],allow:[2,4],also:[2,4],although:[2,4],alwai:[2,4],ani:[2,4],anoth:[2,4],anyon:[2,4],apach:[2,4],api:[3,5,7],appear:[2,4],applic:[2,4],architectur:5,arg:7,argument:7,arriv:[2,4],asctim:7,assign:[2,4,7,8],attempt:[2,4],authent:[2,4,7],author:7,auto_instal:[7,8],automat:0,autonom:[2,4],avail:[2,4,7],back:[2,4,8],bandwidth:[2,4],base:[2,4,7,8],been:[2,4],befor:[2,4,7,8],begin:[7,8],behavior:[2,4],being:[2,4,7],belong:7,below:0,between:[2,4,7],bigger:7,block:7,bool:[7,8],broker:7,busi:[2,4],ca_cert:7,call:[0,1,2,4,7,8],callback:[7,8],can:[0,1,2,4],cancel:7,caus:7,certain:[2,4],certif:7,chang:[0,2,4,7],channel:8,check:7,chunk:[2,4,7,8],chunk_hash:8,chunk_index:[7,8],chunk_siz:[0,7,8],client:[2,4,7],clone:[0,1],close:[2,4],code:[0,7],collect:[0,7],com:[0,1,7],combin:7,command:[0,1,2,4,7,8],common:[2,4],commun:[0,1,2,4,7,8],compar:7,complet:[2,4,5,7],compli:[2,4],concept:[2,4],condit:[2,4],conduct:[2,4],config_1:0,config_2:0,config_3:0,config_4:0,configur:[5,7,8],configuration_1:0,configuration_2:0,configuration_3:0,configuration_4:0,configuration_command_type_curr:8,configuration_command_type_set:8,configuration_command_type_unknown:8,configuration_handl:[0,7,8],configuration_provid:[0,7,8],configurationcommand:7,configurationhandl:[0,5,6,8],configurationhandlerimpl:0,configurationprovid:[0,5,6,8],configurationproviderimpl:0,connack:7,connect:[0,5,6,8],connected_rc:7,connectivity_servic:[7,8],connectivityservic:7,connector:[0,1],consist:[2,4,8],consol:7,constraint:7,constructor:0,consult:[2,4],contain:[7,8],content:[5,7],control:[2,4],convent:[2,4],copi:7,core:8,could:[2,4],count:7,countdown:7,cpython:7,creat:[0,1,2,4,7],credenti:[0,1,2,4,7],crt:7,current:[0,2,4,7,8],current_hash:8,custom:[0,2,4],custom_queu:0,dashboard:[2,4],data:[5,6,8],debug:7,declar:[2,4],decreas:[2,4],def:0,defin:[2,4],deliv:[2,4,7],deliveri:[2,4],demand:[0,1],demo:7,demonstr:[0,1,3],denot:[2,4],depend:[0,1,2,4,5,6,8],dequ:[0,7],deriv:[2,4],descript:5,deseri:[7,8],deserialize_actuator_command:[7,8],deserialize_configuration_command:[7,8],deserialize_firmware_chunk:[7,8],deserialize_firmware_command:[7,8],design:7,desir:[2,4,7],detail:3,determin:[2,4,7,8],develop:[2,4],devic:[0,1,5,6,8],device_kei:[0,1,7],dict:[0,7,8],dictionari:7,differ:[2,4],disabl:[0,2,4,7],disambigu:[2,4],disconnect:[5,7,8],disk:7,displai:[2,4],distinct:[2,4],distinguish:[2,4],divid:[2,4],document:[2,4,5],documentait:5,doubl:7,download:[0,2,4,7,8],download_loc:[0,7],drastic:[2,4],driver:[2,4],due:[2,4,7],dure:[2,4],dynam:[2,4],each:7,either:[2,4],elif:0,emerg:[2,4],enabl:[0,2,4,7,8],encrypt:7,end:7,enter:[2,4],enumer:[7,8],error:[2,4,8],especi:[2,4],establish:[0,7],even:[2,4],event:[7,8],everi:[0,2,4,7],everyth:7,exact:[2,4],exampl:[2,4,5,7],exceed:[2,4],except:7,exchang:[2,4,7],execut:[2,4,8],exist:[2,4],expect:[2,4,7],expected_number_of_chunk:7,explicitli:[2,4],exploit:[2,4],extend:0,factori:7,fals:[0,2,4,8],featur:[0,1,2,4,7],feedback:[2,4],fig:[2,4],file:[0,2,3,4,7,8],file_hash:[7,8],file_nam:[7,8],file_s:[7,8],file_url:[7,8],filesystemfirmwarehandl:[0,5,6],filetransferpacket:7,finish:8,firmwar:[5,7,8],firmware_command:[7,8],firmware_command_type_abort:8,firmware_command_type_file_upload:8,firmware_command_type_instal:8,firmware_command_type_unknown:8,firmware_command_type_url_download:8,firmware_error_file_system_error:8,firmware_error_file_upload_dis:8,firmware_error_installation_fail:8,firmware_error_malformed_url:8,firmware_error_retry_count_exceed:8,firmware_error_unspecified_error:8,firmware_error_unsupported_file_s:8,firmware_file_path:[0,7],firmware_handl:[0,7],firmware_instal:[0,7],firmware_statu:[7,8],firmware_status_abort:8,firmware_status_complet:8,firmware_status_error:8,firmware_status_file_readi:8,firmware_status_file_transf:8,firmware_status_instal:8,firmware_upd:[7,8],firmware_update_state_file_obtain:8,firmware_update_state_file_transf:8,firmware_update_state_idl:8,firmware_update_state_instal:8,firmware_update_state_url_download:8,firmware_url_download_handl:[0,7],firmwarecommand:7,firmwarehandl:7,firmwareinstal:[0,5,6],firmwarestatu:7,firmwareupd:7,firmwareupdatestatetyp:7,firmwareurldownloadhandl:[0,5,6],first:7,fit:[0,1],flag:7,flip:[2,4],flow:7,follow:[0,2,3,4],footprint:[2,4],form:[2,4],format:[0,2,4,7],forward:[0,2,4],from:[2,4,7,8],fucntion:8,full:[0,1,5],full_feature_set:7,fulli:[2,4],gate:[2,4],gear:[2,4],gener:[2,4],get:[7,8],get_actuator_statu:[0,7],get_configur:[0,7],get_logg:7,git:[0,1],github:[0,1,7],give:[2,4,7],given:7,goal:[2,4],got:0,gracefulli:[2,4],grai:[2,4],handl:[0,5,6,8],handle_abort:[7,8],handle_actu:[0,7],handle_configur:[0,7],handle_file_download:8,handle_file_upload:7,handle_instal:[7,8],handle_packet:[7,8],handle_pong:[7,8],handle_url_download:[7,8],handle_url_download_result:[7,8],handler:[0,2,4,7],hardwar:[2,4],has:[1,2,4],hash:[7,8],have:[2,4,7],health:[2,4],heart:8,heartbeat:[2,4],here:[0,1,2,4],high:[2,4],his:[2,4],hold:[2,4,7,8],host:7,how:[0,2,3,4],http:[0,1,7],identifi:[2,4],immedi:[2,4],implement:[0,2,4,7,8],inbound:[7,8],inbound_message_deseri:8,inbound_message_listen:7,inboundmessag:7,inboundmessagedeseri:7,incomplet:7,incorpor:[2,4],increas:[2,4],independ:[2,4],index:[5,7,8],indic:[2,4],info:[0,7],inform:[2,3,4,7,8],init:7,initi:[2,4],instal:[2,4,7,8],install_firmwar:[0,7],install_tim:7,instanc:[7,8],integr:[1,2,4],intend:[2,4],interfac:[2,4,7,8],intern:[2,4,5,6],interv:[7,8],invok:[0,1],iot:[0,2,3,4,7,8],issu:[2,4,7,8],item:0,its:[2,4],itself:[7,8],java:[2,4],json:[0,1,2,4],jsonsinglereferenceprotocol:[0,1],just:7,keep:[5,7,8],keep_alive_en:[0,7],keep_alive_servic:[7,8],keepaliveservic:7,kei:[0,1,2,4,7],keyword:7,know:[2,4],knowledg:[2,4],kwarg:7,languag:[2,4],last:7,last_packet_hash:7,later:[7,8],layer:[2,4],level:[0,2,4,7],levelnam:7,librari:[0,1,3,8],licens:[2,4],lifespan:[2,4],like:[2,4],line:[0,1],list:7,listen:[7,8],locat:[2,4,7,8],log:[0,2,4,7],log_fil:7,log_format:7,logger:7,loggerfactori:[5,6],logging_config:[0,7],logic:[2,4],look:3,loop:7,lost:[2,4],made:[2,4],mai:[2,4],maintain:[2,4,8],make:[7,8],make_from_actuator_statu:[7,8],make_from_alarm:[7,8],make_from_chunk_request:[7,8],make_from_configur:[7,8],make_from_firmware_statu:[7,8],make_from_firmware_vers:[7,8],make_from_keep_alive_messag:[7,8],make_from_sensor_read:[7,8],manag:[5,6],manifest:[0,1,2,4],manipul:7,manner:0,market:[2,4],master:7,match:7,max_file_s:[0,7],max_retri:7,maximum:[2,4,7],mean:[2,4,7],meaning:[2,4],meant:[2,4],measur:[2,4,8],mechan:5,member:7,memori:[0,2,4,8],messag:[0,2,4,7,8],method:[2,4,7,8],might:[2,4],minim:[2,4,7],minimum:7,minimum_packet_s:7,minut:[0,2,4,7,8],model:[2,4],modif:[2,4],modul:[5,6],moment:[2,4],momentarili:[2,4],monitor:[2,4],more:[0,1,2,4,7],motor:[2,4],mqtt:[2,4,7,8],mqttmessag:7,multi:[0,2,4],must:[0,1,2,4,7],myfirmwareinstal:0,name:[2,4,7,8],necess:7,necessari:[2,4,7,8],need:[2,4],network:[0,2,4,7],next:[2,4,7],next_chunk_index:7,non:[2,4,7],none:[0,7,8],note:[2,4],notifi:0,notset:[0,7],number:7,object:[7,8],obtain:7,occur:[2,4,8],ocur:8,ofconfigur:8,off:[2,4],offlin:[2,4],offset:[7,8],omit:[2,4,7],on_file_packet_request_callback:[7,8],on_inbound_messag:7,on_mqtt_connect:7,on_mqtt_disconnect:7,on_mqtt_messag:7,on_status_callback:[7,8],onc:[0,2,4],one:[0,2,3,4],onli:[2,4],open:[2,4],oper:[2,4],option:[0,2,4,7,8],order:[2,4],osfirmwareupd:[5,6],osinboundmessagedeseri:[5,6],oskeepaliveservic:[5,6],osmqttconnectivityservic:[5,6],osoutboundmessagefactori:[5,6],osoutboundmessagequeu:[5,6],other:[2,4,7],otherwis:8,outbound:[7,8],outbound_messag:[7,8],outbound_message_factori:[7,8],outbound_message_queu:[0,7,8],outboundmessag:7,outboundmessagefactori:7,outboundmessagequeu:[0,7],outcom:7,output:7,over:[7,8],overrid:7,own:[2,4],pack:7,packag:[0,1,5,6],packet:[7,8],paho:7,pair:7,paramet:[2,4,7,8],pars:[2,4],part:[2,4],pass:[0,1,2,4,7,8],password:[0,1,2,4,7],path:7,payload:[7,8],peek:[7,8],per:[2,4],perform:[1,2,4,8],period:[2,4],persist:[7,8],persist_vers:[7,8],persistent_queu:7,persistentqueu:7,piec:[2,4,7,8],ping:[7,8],pip3:[0,1],place:[7,8],platform:[2,3,4,7,8],port:7,possibl:[2,4,7],potenti:[1,3],precis:[2,4],prepar:8,present:[2,4],prevent:[2,4],previou:[2,4,8],previous_hash:8,print:0,privat:7,process:[0,2,4,7,8],product:[2,4],program:[2,4],project:[2,4],properti:[2,4],protocol:[0,1,2,4],provid:[0,2,4,7,8],publish:[2,4,7,8],publish_actuator_statu:[0,7,8],publish_configur:[0,7,8],push:[0,1],put:[7,8],python:[0,1,2,4,7,8],qos:7,qualiti:7,queue:7,rais:7,reach:[2,4],read:[3,5,7,8],read_chunk:[7,8],readi:[2,4,7,8],real:[2,4],reason:7,receiv:[1,2,4,7,8],recurs:[0,1],reduc:[0,2,4],reduct:[2,4],refer:[0,2,4,7,8],refus:7,regular:[7,8],relat:7,releas:[2,4],remot:7,remov:[7,8],repeat:[7,8],repeatingtim:7,report:[2,4,7,8],report_result:[7,8],report_result_callback:7,repositori:[0,1],repres:[2,4],represent:8,request:[7,8],request_timeout:7,requir:[0,1,2,4],reset:7,reset_st:7,resourc:7,respons:[2,4,7,8],result:[2,4,7,8],result_callback:7,retain:7,retri:7,retry_count:7,run:[0,1],runtimeerror:7,safe:7,same:[2,4,7],second:7,section:[2,3,4],secur:[2,4],see:[0,3],seen:[],self:[0,7],send:[1,2,3,4,7,8],send_keep_al:7,sensor:[3,5,7,8],sensorread:7,sent:[0,2,4,7,8],separ:[2,4],serial:[7,8],server:[2,4,7],servic:[2,4,7,8],set:[0,1,2,4,7,8],set_inbound_message_listen:[7,8],set_on_file_packet_request_callback:[7,8],set_on_status_callback:[7,8],set_url_download_result_callback:[7,8],setup:[0,1],sha256:7,should:[7,8],shown:[2,4],simpl:[1,5],singl:[2,4,7],situat:0,size:[2,4,7,8],small:[2,4],snippet:0,socket:[2,4],softwar:5,some:[2,4],some_password:[0,1],soon:7,soul:8,sourc:[2,4,7,8],special:[2,4],specif:[2,4],specifi:[0,2,4],split:7,ssl:[2,4],stage:[2,4],start:[2,4,7,8],state:[2,4,7,8],statu:[0,2,4,7,8],status:[2,4,8],still:0,stop:[7,8],storag:[7,8],store:[0,1,2,4,7,8],str:[0,7,8],string:7,submodul:[0,1],suboptim:0,subpackag:[5,6,8],subscrib:7,subsequ:7,success:[2,4,8],successfulli:[2,4],suitabl:[2,4],summar:[2,4],support:[0,1,2,4,7],tabl:5,take:[2,4,7],temp:7,temp_fil:7,temperatur:[1,2,3,4],temporari:[7,8],termin:[2,4],than:[2,4,7],thei:[2,4,7],them:[2,4,7],therebi:[2,4],therefor:[2,4],thi:[0,1,2,4,7,8],thread:7,three:[2,4],threshold:[2,4],through:[2,4,7],throughout:7,ties:8,time:[2,4],timeout:[2,4,7],timer:7,timestamp:[2,4,7,8],togeth:8,topic:7,transfer:8,treat:[2,4],tree:7,tupl:[7,8],turn:[2,4],two:[2,4,7],txt:[0,1],type:[2,4,7,8],unabl:[2,4],under:[2,4],unexpect:7,ungrac:[2,4],uniqu:[2,4],unix:[7,8],unpersist_vers:[7,8],until:[2,4],updat:[5,7,8],update_abort:[7,8],update_fin:[7,8],update_start:[7,8],update_start_url_download:[7,8],upload:7,upon:[7,8],url:[0,2,4,7,8],usag:[2,3,4,7],use:[0,2,4,7],used:[0,2,4,7,8],user:[2,4,7],userdata:7,uses:[0,7],using:[0,1,2,4,7],utc:[2,4],util:[2,3,4],valid:[2,4,7],validate_firmware_fil:7,validate_packet:7,valu:[0,2,4,7,8],valuabl:[2,4],variabl:7,varieti:[2,4],veri:[2,4],verifi:[2,4],version:[0,2,4,7,8],version_persist:7,view:[2,4],visit:[3,7],wai:[0,2,4],wait:[2,4],want:[2,4,8],well:[0,8],were:[2,4],what:[2,4],when:[0,1,2,4,7,8],where:[0,2,4,7,8],wherea:0,whether:[2,4],which:[0,1,2,4,7],whole:[2,4],wide:[2,4],without:[2,4,7,8],wolk:[0,1,5],wolk_devic:[0,1],wolk_exampl:[0,1],wolkabout:[0,2,3,4,7,8],wolkconnect:[0,1,3,6,8],wolkcor:[5,6],world:[2,4],write:[7,8],write_chunk:[7,8],written:[2,4],you:[0,1],your:[0,1],zerynth:7},titles:["Prerequisite","Prerequisite","WolkConnect library","Examples","WolkConnect library","WolkConnect-Python","wolk","wolk package","wolk.wolkcore package"],titleterms:{"function":[1,2,4],actuat:[0,2,4],actuationhandl:7,actuatorcommand:8,actuatorcommandtyp:8,actuatorst:8,actuatorstatu:8,actuatorstatusprovid:7,addit:1,alarm:[2,4,8],aliv:[0,2,4],api:[2,4],architectur:[2,4],configur:[0,2,4],configurationcommand:8,configurationcommandtyp:8,configurationhandl:7,configurationprovid:7,connect:[1,2,4,7],connectivityservic:8,data:[0,1,2,4,7],debug:0,depend:7,descript:[2,4],devic:[2,4,7],disconnect:[0,1,2,4],establish:1,event:0,exampl:[0,1,3],filesystemfirmwarehandl:7,filetransferpacket:8,firmwar:[0,2,4],firmwarecommand:8,firmwarecommandtyp:8,firmwareerrortyp:8,firmwarehandl:8,firmwareinstal:7,firmwarestatu:8,firmwarestatustyp:8,firmwareupd:8,firmwareupdatestatetyp:8,firmwareurldownloadhandl:7,from:[0,1],full:3,handl:[2,4,7],inboundmessag:8,inboundmessagedeseri:8,instal:[0,1],intern:7,iot:1,keep:[0,2,4],keepaliveservic:8,librari:[2,4],loggerfactori:7,manag:[2,4,7],mechan:[0,2,4],modul:[7,8],osfirmwareupd:7,osinboundmessagedeseri:7,oskeepaliveservic:7,osmqttconnectivityservic:7,osoutboundmessagefactori:7,osoutboundmessagequeu:7,outboundmessag:8,outboundmessagefactori:8,outboundmessagequeu:8,packag:[7,8],persist:0,platform:[0,1],prerequisit:[0,1],publish:[0,1],python:5,read:[0,1,2,4],sensor:[0,1,2,4],sensorread:8,simpl:3,softwar:[2,4],sourc:[0,1],status:0,strategi:[0,1],subpackag:7,updat:[0,2,4],usag:[0,1],wolk:[6,7,8],wolkabout:1,wolkconnect:[2,4,5,7],wolkcor:[7,8]}})