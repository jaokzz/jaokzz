import 'package:flutter/services.dart';

class UnityBridge {
  static const _channel = MethodChannel('anatomix/unity_bridge');

  Future<void> loadSystem(String systemId) async {
    await _channel.invokeMethod('loadSystem', {'systemId': systemId});
  }

  Future<void> isolateStructure(String structureId) async {
    await _channel.invokeMethod('isolateStructure', {'structureId': structureId});
  }

  Future<void> highlightStructure(String structureId) async {
    await _channel.invokeMethod('highlightStructure', {'structureId': structureId});
  }
}
