import 'package:dio/dio.dart';

class ApiClient {
  ApiClient(String baseUrl)
      : dio = Dio(
          BaseOptions(
            baseUrl: baseUrl,
            connectTimeout: const Duration(seconds: 10),
            receiveTimeout: const Duration(seconds: 10),
          ),
        );

  final Dio dio;
}
