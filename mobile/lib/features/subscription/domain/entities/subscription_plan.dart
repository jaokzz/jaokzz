enum BillingCycle { monthly, yearly, lifetime }

class SubscriptionPlan {
  const SubscriptionPlan({
    required this.id,
    required this.name,
    required this.billingCycle,
    required this.price,
    required this.currency,
    required this.highlighted,
    required this.features,
  });

  final String id;
  final String name;
  final BillingCycle billingCycle;
  final double price;
  final String currency;
  final bool highlighted;
  final List<String> features;
}
