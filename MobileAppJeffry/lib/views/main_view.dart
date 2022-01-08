// ignore_for_file: avoid_print

import 'package:flutter/material.dart';
import 'package:flutter_app_sastreria/views/missing_orders.dart';

// ignore: camel_case_types
class main_view extends StatefulWidget {
  const main_view({Key? key}) : super(key: key);

  @override
  _main_viewState createState() => _main_viewState();
}

// ignore: camel_case_types
class _main_viewState extends State<main_view> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sistema Gestor de Sastrería\nSara Lehr'),
        backgroundColor: Colors.green.shade200,
      ),
      backgroundColor: const Color.fromARGB(255, 211, 209, 209),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            RaisedButton(
                child: const Text('Lista Semanal Órdenes Pendientes'),
                onPressed: () => {
                      Navigator.push(
                          context,
                          MaterialPageRoute(
                              builder: (context) => const missing_orders()))
                    })
          ],
        ),
      ),
    );
  }
}
