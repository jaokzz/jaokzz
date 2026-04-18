enum SystemType { muscular, skeletal, nervous, cardiovascular }

class AnatomyStructure {
  const AnatomyStructure({
    required this.id,
    required this.name,
    required this.description,
    required this.function,
    required this.origin,
    required this.insertion,
    required this.systemType,
    required this.unityNodeId,
  });

  final String id;
  final String name;
  final String description;
  final String function;
  final String origin;
  final String insertion;
  final SystemType systemType;
  final String unityNodeId;
}
