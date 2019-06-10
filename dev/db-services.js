/* eslint-disable max-len */
const services = [
    {
        'domain':'homeassistant',
        'services':{
            'check_config':{
                'description':'Check the Home Assistant configuration files for errors. Errors will be displayed in the Home Assistant log.',
                'fields':{

                }
            },
            'reload_core_config':{
                'description':'Reload the core configuration.',
                'fields':{

                }
            },
            'restart':{
                'description':'Restart the Home Assistant service.',
                'fields':{

                }
            },
            'stop':{
                'description':'Stop the Home Assistant service.',
                'fields':{

                }
            },
            'toggle':{
                'description':'Generic service to toggle devices on/off under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.',
                'fields':{
                    'entity_id':{
                        'description':'The entity_id of the device to toggle on/off.',
                        'example':'light.living_room'
                    }
                }
            },
            'turn_off':{
                'description':'Generic service to turn devices off under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.',
                'fields':{
                    'entity_id':{
                        'description':'The entity_id of the device to turn off.',
                        'example':'light.living_room'
                    }
                }
            },
            'turn_on':{
                'description':'Generic service to turn devices on under any domain. Same usage as the light.turn_on, switch.turn_on, etc. services.',
                'fields':{
                    'entity_id':{
                        'description':'The entity_id of the device to turn on.',
                        'example':'light.living_room'
                    }
                }
            },
            'update_entity':{
                'description':'Force one or more entities to update its data',
                'fields':{
                    'entity_id':{
                        'description':'One or multiple entity_ids to update. Can be a list.',
                        'example':'light.living_room'
                    }
                }
            }
        }
    },
    {
        'domain':'persistent_notification',
        'services':{
            'create':{
                'description':'Show a notification in the frontend.',
                'fields':{
                    'message':{
                        'description':'Message body of the notification. [Templates accepted]',
                        'example':'Please check your configuration.yaml.'
                    },
                    'notification_id':{
                        'description':'Target ID of the notification, will replace a notification with the same Id. [Optional]',
                        'example':1234
                    },
                    'title':{
                        'description':'Optional title for your notification. [Optional, Templates accepted]',
                        'example':'Test notification'
                    }
                }
            },
            'dismiss':{
                'description':'Remove a notification from the frontend.',
                'fields':{
                    'notification_id':{
                        'description':'Target ID of the notification, which should be removed. [Required]',
                        'example':1234
                    }
                }
            },
            'mark_read':{
                'description':'',
                'fields':{

                }
            }
        }
    },
    {
        'domain':'recorder',
        'services':{
            'purge':{
                'description':'Start purge task - delete events and states older than x days, according to keep_days service data.',
                'fields':{
                    'keep_days':{
                        'description':'Number of history days to keep in database after purge. Value >= 0.',
                        'example':2
                    },
                    'repack':{
                        'description':'Attempt to save disk space by rewriting the entire database file.',
                        'example':true
                    }
                }
            }
        }
    },
    {
        'domain':'system_log',
        'services':{
            'clear':{
                'description':'',
                'fields':{

                }
            },
            'write':{
                'description':'',
                'fields':{

                }
            }
        }
    },
    {
        'domain':'logbook',
        'services':{
            'log':{
                'description':'',
                'fields':{

                }
            }
        }
    },
    {
        'domain':'conversation',
        'services':{
            'process':{
                'description':'Launch a conversation from a transcribed text.',
                'fields':{
                    'text':{
                        'description':'Transcribed text',
                        'example':'Turn all lights on'
                    }
                }
            }
        }
    },
    {
        'domain':'media_player',
        'services':{
            'clear_playlist':{
                'description':'Send the media player the command to clear players playlist.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change source on.',
                        'example':'media_player.living_room_chromecast'
                    }
                }
            },
            'media_next_track':{
                'description':'Send the media player the command for next track.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to send next track command to.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            },
            'media_pause':{
                'description':'Send the media player the command for pause.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to pause on.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            },
            'media_play':{
                'description':'Send the media player the command for play.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to play on.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            },
            'media_play_pause':{
                'description':'Toggle media player play/pause state.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to toggle play/pause state on.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            },
            'media_previous_track':{
                'description':'Send the media player the command for previous track.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to send previous track command to.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            },
            'media_seek':{
                'description':'Send the media player the command to seek in current playing media.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to seek media on.',
                        'example':'media_player.living_room_chromecast'
                    },
                    'seek_position':{
                        'description':'Position to seek to. The format is platform dependent.',
                        'example':100
                    }
                }
            },
            'media_stop':{
                'description':'Send the media player the stop command.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to stop on.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            },
            'play_media':{
                'description':'Send the media player the command for playing media.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to seek media on',
                        'example':'media_player.living_room_chromecast'
                    },
                    'media_content_id':{
                        'description':'The ID of the content to play. Platform dependent.',
                        'example':'https://home-assistant.io/images/cast/splash.png'
                    },
                    'media_content_type':{
                        'description':'The type of the content to play. Must be one of music, tvshow, video, episode, channel or playlist',
                        'example':'music'
                    }
                }
            },
            'select_sound_mode':{
                'description':'Send the media player the command to change sound mode.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change sound mode on.',
                        'example':'media_player.marantz'
                    },
                    'sound_mode':{
                        'description':'Name of the sound mode to switch to.',
                        'example':'Music'
                    }
                }
            },
            'select_source':{
                'description':'Send the media player the command to change input source.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change source on.',
                        'example':'media_player.media_player.txnr535_0009b0d81f82'
                    },
                    'source':{
                        'description':'Name of the source to switch to. Platform dependent.',
                        'example':'video1'
                    }
                }
            },
            'shuffle_set':{
                'description':'Set shuffling state.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to set.',
                        'example':'media_player.spotify'
                    },
                    'shuffle':{
                        'description':'True/false for enabling/disabling shuffle.',
                        'example':true
                    }
                }
            },
            'toggle':{
                'description':'Toggles a media player power state.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to toggle.',
                        'example':'media_player.living_room_chromecast'
                    }
                }
            },
            'turn_off':{
                'description':'Turn a media player power off.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to turn off.',
                        'example':'media_player.living_room_chromecast'
                    }
                }
            },
            'turn_on':{
                'description':'Turn a media player power on.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to turn on.',
                        'example':'media_player.living_room_chromecast'
                    }
                }
            },
            'volume_down':{
                'description':'Turn a media player volume down.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to turn volume down on.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            },
            'volume_mute':{
                'description':'Mute a media player\'s volume.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to mute.',
                        'example':'media_player.living_room_sonos'
                    },
                    'is_volume_muted':{
                        'description':'True/false for mute/unmute.',
                        'example':true
                    }
                }
            },
            'volume_set':{
                'description':'Set a media player\'s volume level.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to set volume level on.',
                        'example':'media_player.living_room_sonos'
                    },
                    'volume_level':{
                        'description':'Volume level to set as float.',
                        'example':0.6
                    }
                }
            },
            'volume_up':{
                'description':'Turn a media player volume up.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to turn volume up on.',
                        'example':'media_player.living_room_sonos'
                    }
                }
            }
        }
    },
    {
        'domain':'tts',
        'services':{
            'clear_cache':{
                'description':'Remove cache files and RAM cache.',
                'fields':{

                }
            },
            'google_say':{
                'description':'',
                'fields':{

                }
            }
        }
    },
    {
        'domain':'zwave',
        'services':{
            'add_node':{
                'description':'Add a new (unsecure) node to the Z-Wave network. Refer to OZW_Log.txt for progress.',
                'fields':{

                }
            },
            'add_node_secure':{
                'description':'Add a new node to the Z-Wave network with secure communications. Secure network key must be set, this process will fallback to add_node (unsecure) for unsupported devices. Note that unsecure devices can\'t directly talk to secure devices. Refer to OZW_Log.txt for progress.',
                'fields':{

                }
            },
            'cancel_command':{
                'description':'Cancel a running Z-Wave controller command. Use this to exit add_node, if you weren\'t going to use it but activated it.',
                'fields':{

                }
            },
            'change_association':{
                'description':'Change an association in the Z-Wave network.',
                'fields':{
                    'association':{
                        'description':'Specify add or remove association',
                        'example':'add'
                    },
                    'group':{
                        'description':'Group number to set association for.'
                    },
                    'instance':{
                        'description':'(Optional) Instance of multichannel association. Defaults to 0.'
                    },
                    'node_id':{
                        'description':'Node id of the node to set association for.',
                        'example':10
                    },
                    'target_node_id':{
                        'description':'Node id of the node to associate to.',
                        'example':42
                    }
                }
            },
            'heal_network':{
                'description':'Start a Z-Wave network heal. This might take a while and will slow down the Z-Wave network greatly while it is being processed. Refer to OZW_Log.txt for progress.',
                'fields':{
                    'description':'Whether or not to update the return routes from the nodes to the controller. Defaults to False.',
                    'example':true,
                    'return_routes':null
                }
            },
            'heal_node':{
                'description':'Start a Z-Wave node heal. Refer to OZW_Log.txt for progress.',
                'fields':{
                    'description':'Whether or not to update the return routes from the node to the controller. Defaults to False.',
                    'example':true,
                    'return_routes':null
                }
            },
            'print_config_parameter':{
                'description':'Prints a Z-Wave node config parameter value to log.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to print the parameter from (integer).'
                    },
                    'parameter':{
                        'description':'Parameter number to print (integer).'
                    }
                }
            },
            'print_node':{
                'description':'Print all information about z-wave node.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to print.'
                    }
                }
            },
            'refresh_entity':{
                'description':'Refresh zwave entity.',
                'fields':{
                    'entity_id':{
                        'description':'Name of the entity to refresh.',
                        'example':'light.leviton_vrmx11lz_multilevel_scene_switch_level_40'
                    }
                }
            },
            'refresh_node':{
                'description':'Refresh zwave node.',
                'fields':{
                    'node_id':{
                        'description':'ID of the node to refresh.',
                        'example':10
                    }
                }
            },
            'refresh_node_value':{
                'description':'Refresh the value for a given value_id on a Z-Wave device.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to refresh value from (integer).'
                    },
                    'value_id':{
                        'description':'Value id of the value to refresh.'
                    }
                }
            },
            'remove_failed_node':{
                'description':'This command will remove a failed node from the network. The node should be on the controller\'s failed nodes list, otherwise this command will fail. Refer to OZW_Log.txt for progress.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to remove (integer).',
                        'example':10
                    }
                }
            },
            'remove_node':{
                'description':'Remove a node from the Z-Wave network. Refer to OZW_Log.txt for progress.',
                'fields':{

                }
            },
            'rename_node':{
                'description':'Set the name of a node. This will also affect the IDs of all entities in the node.',
                'fields':{
                    'name':{
                        'description':'New Name',
                        'example':'kitchen'
                    },
                    'node_id':{
                        'description':'ID of the node to rename.',
                        'example':10
                    }
                }
            },
            'rename_value':{
                'description':'Set the name of a node value. This will affect the ID of the value entity. Value IDs can be queried from /api/zwave/values/{node_id}',
                'fields':{
                    'name':{
                        'description':'New Name',
                        'example':'Luminosity'
                    },
                    'node_id':{
                        'description':'ID of the node to rename.',
                        'example':10
                    },
                    'value_id':{
                        'description':'ID of the value to rename.',
                        'example':72037594255792737
                    }
                }
            },
            'replace_failed_node':{
                'description':'Replace a failed node with another. If the node is not in the controller\'s failed nodes list, or the node responds, this command will fail. Refer to OZW_Log.txt for progress.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to replace (integer).',
                        'example':10
                    }
                }
            },
            'reset_node_meters':{
                'description':'Resets the meter counters of a node.',
                'fields':{
                    'instance':{
                        'description':'(Optional) Instance of association. Defaults to instance 1.'
                    },
                    'node_id':{
                        'description':'Node id of the device to reset meters for. (integer)'
                    }
                }
            },
            'set_config_parameter':{
                'description':'Set a config parameter to a node on the Z-Wave network.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to set config parameter to (integer).'
                    },
                    'parameter':{
                        'description':'Parameter number to set (integer).'
                    },
                    'size':{
                        'description':'(Optional) Set the size of the parameter value. Only needed if no parameters are available.'
                    },
                    'value':{
                        'description':'Value to set for parameter. (String value for list and bool parameters, integer for others).'
                    }
                }
            },
            'set_node_value':{
                'description':'Set the value for a given value_id on a Z-Wave device.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to set the value on (integer).'
                    },
                    'value':{
                        'description':'Value to set (integer).'
                    },
                    'value_id':{
                        'description':'Value id of the value to set (integer).'
                    }
                }
            },
            'set_poll_intensity':{
                'description':'Set the polling interval to a nodes value',
                'fields':{
                    'node_id':{
                        'description':'ID of the node to set polling to.',
                        'example':10
                    },
                    'poll_intensity':{
                        'description':'The intensity to poll, 0 = disabled, 1 = Every time through list, 2 = Every second time through list...',
                        'example':2
                    },
                    'value_id':{
                        'description':'ID of the value to set polling to.',
                        'example':72037594255792737
                    }
                }
            },
            'set_wakeup':{
                'description':'Sets wake-up interval of a node.',
                'fields':{
                    'node_id':{
                        'description':'Node id of the device to set the wake-up interval for. (integer)'
                    },
                    'value':{
                        'description':'Value of the interval to set. (integer)'
                    }
                }
            },
            'soft_reset':{
                'description':'This will reset the controller without removing its data. Use carefully because not all controllers support this. Refer to your controller\'s manual.',
                'fields':{

                }
            },
            'start_network':{
                'description':'Start the Z-Wave network. This might take a while, depending on how big your Z-Wave network is.',
                'fields':{

                }
            },
            'stop_network':{
                'description':'Stop the Z-Wave network, all updates into HASS will stop.',
                'fields':{

                }
            },
            'test_network':{
                'description':'This will send test to nodes in the Z-Wave network. This will greatly slow down the Z-Wave network while it is being processed. Refer to OZW_Log.txt for progress.',
                'fields':{

                }
            },
            'test_node':{
                'description':'This will send test messages to a node in the Z-Wave network. This could bring back dead nodes.',
                'fields':{
                    'messages':{
                        'description':'Optional. Amount of test messages to send.',
                        'example':3
                    },
                    'node_id':{
                        'description':'ID of the node to send test messages to.',
                        'example':10
                    }
                }
            },
            'update_config':{
                'description':'Attempt to update ozw configuration files from git to support newer devices.',
                'fields':{

                }
            }
        }
    },
    {
        'domain':'climate',
        'services':{
            'set_aux_heat':{
                'description':'Turn auxiliary heater on/off for climate device.',
                'fields':{
                    'aux_heat':{
                        'description':'New value of axillary heater.',
                        'example':true
                    },
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.kitchen'
                    }
                }
            },
            'set_away_mode':{
                'description':'Turn away mode on/off for climate device.',
                'fields':{
                    'away_mode':{
                        'description':'New value of away mode.',
                        'example':true
                    },
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.kitchen'
                    }
                }
            },
            'set_fan_mode':{
                'description':'Set fan operation for climate device.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.nest'
                    },
                    'fan_mode':{
                        'description':'New value of fan mode.',
                        'example':'On Low'
                    }
                }
            },
            'set_hold_mode':{
                'description':'Turn hold mode for climate device.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.kitchen'
                    },
                    'hold_mode':{
                        'description':'New value of hold mode',
                        'example':'away'
                    }
                }
            },
            'set_humidity':{
                'description':'Set target humidity of climate device.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.kitchen'
                    },
                    'humidity':{
                        'description':'New target humidity for climate device.',
                        'example':60
                    }
                }
            },
            'set_operation_mode':{
                'description':'Set operation mode for climate device.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.nest'
                    },
                    'operation_mode':{
                        'description':'New value of operation mode.',
                        'example':'Heat'
                    }
                }
            },
            'set_swing_mode':{
                'description':'Set swing operation for climate device.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.nest'
                    },
                    'swing_mode':{
                        'description':'New value of swing mode.',
                        'example':null
                    }
                }
            },
            'set_temperature':{
                'description':'Set target temperature of climate device.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.kitchen'
                    },
                    'operation_mode':{
                        'description':'Operation mode to set temperature to. This defaults to current_operation mode if not set, or set incorrectly.',
                        'example':'Heat'
                    },
                    'target_temp_high':{
                        'description':'New target high tempereature for HVAC.',
                        'example':26
                    },
                    'target_temp_low':{
                        'description':'New target low temperature for HVAC.',
                        'example':20
                    },
                    'temperature':{
                        'description':'New target temperature for HVAC.',
                        'example':25
                    }
                }
            },
            'turn_off':{
                'description':'Turn climate device off.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.kitchen'
                    }
                }
            },
            'turn_on':{
                'description':'Turn climate device on.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to change.',
                        'example':'climate.kitchen'
                    }
                }
            }
        }
    },
    {
        'domain':'group',
        'services':{
            'reload':{
                'description':'Reload group configuration.',
                'fields':{

                }
            },
            'remove':{
                'description':'Remove a user group.',
                'fields':{
                    'object_id':{
                        'description':'Group id and part of entity id.',
                        'example':'test_group'
                    }
                }
            },
            'set':{
                'description':'Create/Update a user group.',
                'fields':{
                    'add_entities':{
                        'description':'List of members they will change on group listening.',
                        'example':'domain.entity_id1, domain.entity_id2'
                    },
                    'all':{
                        'description':'Enable this option if the group should only turn on when all entities are on.',
                        'example':true
                    },
                    'control':{
                        'description':'Value for control the group control.',
                        'example':'hidden'
                    },
                    'entities':{
                        'description':'List of all members in the group. Not compatible with \'delta\'.',
                        'example':'domain.entity_id1, domain.entity_id2'
                    },
                    'icon':{
                        'description':'Name of icon for the group.',
                        'example':'mdi:camera'
                    },
                    'name':{
                        'description':'Name of group',
                        'example':'My test group'
                    },
                    'object_id':{
                        'description':'Group id and part of entity id.',
                        'example':'test_group'
                    },
                    'view':{
                        'description':'Boolean for if the group is a view.',
                        'example':true
                    },
                    'visible':{
                        'description':'If the group is visible on UI.',
                        'example':true
                    }
                }
            },
            'set_visibility':{
                'description':'Hide or show a group.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to set value.',
                        'example':'group.travel'
                    },
                    'visible':{
                        'description':'True if group should be shown or False if it should be hidden.',
                        'example':true
                    }
                }
            }
        }
    },
    {
        'domain':'script',
        'services':{
            '1535436271565':{
                'description':'',
                'fields':{

                }
            },
            '1535769013275':{
                'description':'',
                'fields':{

                }
            },
            '1557985218293':{
                'description':'',
                'fields':{

                }
            },
            '1559320214956':{
                'description':'',
                'fields':{

                }
            },
            'reload':{
                'description':'',
                'fields':{

                }
            },
            'toggle':{
                'description':'',
                'fields':{

                }
            },
            'turn_off':{
                'description':'',
                'fields':{

                }
            },
            'turn_on':{
                'description':'',
                'fields':{

                }
            }
        }
    },
    {
        'domain':'cover',
        'services':{
            'close_cover':{
                'description':'Close all or specified cover.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) to close.',
                        'example':'cover.living_room'
                    }
                }
            },
            'close_cover_tilt':{
                'description':'Close all or specified cover tilt.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) to close tilt.',
                        'example':'cover.living_room'
                    }
                }
            },
            'open_cover':{
                'description':'Open all or specified cover.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) to open.',
                        'example':'cover.living_room'
                    }
                }
            },
            'open_cover_tilt':{
                'description':'Open all or specified cover tilt.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) tilt to open.',
                        'example':'cover.living_room'
                    }
                }
            },
            'set_cover_position':{
                'description':'Move to specific position all or specified cover.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) to set cover position.',
                        'example':'cover.living_room'
                    },
                    'position':{
                        'description':'Position of the cover (0 to 100).',
                        'example':30
                    }
                }
            },
            'set_cover_tilt_position':{
                'description':'Move to specific position all or specified cover tilt.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) to set cover tilt position.',
                        'example':'cover.living_room'
                    },
                    'tilt_position':{
                        'description':'Tilt position of the cover (0 to 100).',
                        'example':30
                    }
                }
            },
            'stop_cover':{
                'description':'Stop all or specified cover.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) to stop.',
                        'example':'cover.living_room'
                    }
                }
            },
            'stop_cover_tilt':{
                'description':'Stop all or specified cover.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of cover(s) to stop.',
                        'example':'cover.living_room'
                    }
                }
            }
        }
    },
    {
        'domain':'fan',
        'services':{
            'oscillate':{
                'description':'Oscillates the fan.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of the entities to oscillate',
                        'example':'fan.desk_fan'
                    },
                    'oscillating':{
                        'description':'Flag to turn on/off oscillation',
                        'example':true
                    }
                }
            },
            'set_direction':{
                'description':'Set the fan rotation.',
                'fields':{
                    'direction':{
                        'description':'The direction to rotate. Either \'forward\' or \'reverse\'',
                        'example':'forward'
                    },
                    'entity_id':{
                        'description':'Name(s) of the entities to toggle',
                        'example':'fan.living_room'
                    }
                }
            },
            'set_speed':{
                'description':'Sets fan speed.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of the entities to set',
                        'example':'fan.living_room'
                    },
                    'speed':{
                        'description':'Speed setting',
                        'example':'low'
                    }
                }
            },
            'toggle':{
                'description':'Toggle the fan on/off.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of the entities to toggle',
                        'exampl':'fan.living_room'
                    }
                }
            },
            'turn_off':{
                'description':'Turns fan off.',
                'fields':{
                    'entity_id':{
                        'description':'Names(s) of the entities to turn off',
                        'example':'fan.living_room'
                    }
                }
            },
            'turn_on':{
                'description':'Turns fan on.',
                'fields':{
                    'entity_id':{
                        'description':'Names(s) of the entities to turn on',
                        'example':'fan.living_room'
                    },
                    'speed':{
                        'description':'Speed setting',
                        'example':'high'
                    }
                }
            }
        }
    },
    {
        'domain':'lock',
        'services':{
            'clear_usercode':{
                'description':'Clear a usercode from lock.',
                'fields':{
                    'code_slot':{
                        'description':'Code slot to clear code from.',
                        'example':1
                    },
                    'node_id':{
                        'description':'Node id of the lock.',
                        'example':18
                    }
                }
            },
            'get_usercode':{
                'description':'Retrieve a usercode from lock.',
                'fields':{
                    'code_slot':{
                        'description':'Code slot to retrieve a code from.',
                        'example':1
                    },
                    'node_id':{
                        'description':'Node id of the lock.',
                        'example':18
                    }
                }
            },
            'lock':{
                'description':'Lock all or specified locks.',
                'fields':{
                    'code':{
                        'description':'An optional code to lock the lock with.',
                        'example':1234
                    },
                    'entity_id':{
                        'description':'Name of lock to lock.',
                        'example':'lock.front_door'
                    }
                }
            },
            'open':{
                'description':'',
                'fields':{

                }
            },
            'set_usercode':{
                'description':'Set a usercode to lock.',
                'fields':{
                    'code_slot':{
                        'description':'Code slot to set the code.',
                        'example':1
                    },
                    'node_id':{
                        'description':'Node id of the lock.',
                        'example':18
                    },
                    'usercode':{
                        'description':'Code to set.',
                        'example':1234
                    }
                }
            },
            'unlock':{
                'description':'Unlock all or specified locks.',
                'fields':{
                    'code':{
                        'description':'An optional code to unlock the lock with.',
                        'example':1234
                    },
                    'entity_id':{
                        'description':'Name of lock to unlock.',
                        'example':'lock.front_door'
                    }
                }
            }
        }
    },
    {
        'domain':'switch',
        'services':{
            'toggle':{
                'description':'Toggles a switch state.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to toggle.',
                        'example':'switch.living_room'
                    }
                }
            },
            'turn_off':{
                'description':'Turn a switch off.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to turn off.',
                        'example':'switch.living_room'
                    }
                }
            },
            'turn_on':{
                'description':'Turn a switch on.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to turn on',
                        'example':'switch.living_room'
                    }
                }
            }
        }
    },
    {
        'domain':'light',
        'services':{
            'toggle':{
                'description':'Toggles a light.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to toggle.',
                        'example':'light.kitchen'
                    },
                    'transition':{
                        'description':'Duration in seconds it takes to get to next state.',
                        'example':60
                    }
                }
            },
            'turn_off':{
                'description':'Turn a light off.',
                'fields':{
                    'entity_id':{
                        'description':'Name(s) of entities to turn off.',
                        'example':'light.kitchen'
                    },
                    'flash':{
                        'description':'If the light should flash.',
                        'values':[
                            'short',
                            'long'
                        ]
                    },
                    'transition':{
                        'description':'Duration in seconds it takes to get to next state.',
                        'example':60
                    }
                }
            },
            'turn_on':{
                'description':'Turn a light on.',
                'fields':{
                    'brightness':{
                        'description':'Number between 0..255 indicating brightness.',
                        'example':120
                    },
                    'brightness_pct':{
                        'description':'Number between 0..100 indicating percentage of full brightness.',
                        'example':47
                    },
                    'color_name':{
                        'description':'A human readable color name.',
                        'example':'red'
                    },
                    'color_temp':{
                        'description':'Color temperature for the light in mireds.',
                        'example':250
                    },
                    'effect':{
                        'description':'Light effect.',
                        'values':[
                            'colorloop',
                            'random'
                        ]
                    },
                    'entity_id':{
                        'description':'Name(s) of entities to turn on',
                        'example':'light.kitchen'
                    },
                    'flash':{
                        'description':'If the light should flash.',
                        'values':[
                            'short',
                            'long'
                        ]
                    },
                    'hs_color':{
                        'description':'Color for the light in hue/sat format. Hue is 0-360 and Sat is 0-100.',
                        'example':'[300, 70]'
                    },
                    'kelvin':{
                        'description':'Color temperature for the light in Kelvin.',
                        'example':4000
                    },
                    'profile':{
                        'description':'Name of a light profile to use.',
                        'example':'relax'
                    },
                    'rgb_color':{
                        'description':'Color for the light in RGB-format.',
                        'example':'[255, 100, 100]'
                    },
                    'transition':{
                        'description':'Duration in seconds it takes to get to next state',
                        'example':60
                    },
                    'white_value':{
                        'description':'Number between 0..255 indicating level of white.',
                        'example':'250'
                    },
                    'xy_color':{
                        'description':'Color for the light in XY-format.',
                        'example':'[0.52, 0.43]'
                    }
                }
            }
        }
    },
    {
        'domain':'automation',
        'services':{
            'reload':{
                'description':'Reload the automation configuration.',
                'fields':{

                }
            },
            'toggle':{
                'description':'Toggle an automation.',
                'fields':{
                    'entity_id':{
                        'description':'Name of the automation to toggle on/off.',
                        'example':'automation.notify_home'
                    }
                }
            },
            'trigger':{
                'description':'Trigger the action of an automation.',
                'fields':{
                    'entity_id':{
                        'description':'Name of the automation to trigger.',
                        'example':'automation.notify_home'
                    }
                }
            },
            'turn_off':{
                'description':'Disable an automation.',
                'fields':{
                    'entity_id':{
                        'description':'Name of the automation to turn off.',
                        'example':'automation.notify_home'
                    }
                }
            },
            'turn_on':{
                'description':'Enable an automation.',
                'fields':{
                    'entity_id':{
                        'description':'Name of the automation to turn on.',
                        'example':'automation.notify_home'
                    }
                }
            }
        }
    }
]

module.exports = services
