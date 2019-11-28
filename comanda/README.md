# Comanda
 ![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagen1.jpg)

## Login

Logueo con nombre de usuario y clave

 ![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/login.jpg)

## Registro de usuario

Registro de usuario ingresando nombre de usuario, clave, foto. Incluye recaptcha de google. 

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/registro.jpg)

## PAGINA DE CLIENTES

Tareas que puede realizar un cliente: Elegir mesa y cargar un pedido, ver el listado de precios, el estado de los pedidos, y cargar encuesta de satisfaccion

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/cliente.jpg)

## Elegir mesa

Si hay mesas disponibles, puede elegir la mesa: 

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/elegirMesa.jpg)

Si no hay mesas disponibles, puede agregarse a la lista de espera: 

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/clientesEspera.jpg)

Una vez en la lista de espera, el mozo debe asignarle una mesa. En la página del cliente se habilita un botón "Actualizar" para que el cliente pueda ver la posición en la lista de espera en la que se encuentra. Cuando el mozo le asigna una mesa, se hablita la posibilidad de cargar un pedido. 


![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/clienteActualizar.jpg)

## Lista de precios

El cliente puede ver el listado de productos, sus precios, si son aptos para vegetarianos y el contenido calórico.

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/precios.jpg)

## Estado de pedidos

Seleccionando su pedido, el cliente puede hacer el seguimiento del estado en el que se encuentra su pedido

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/estadoPedido.jpg)

## Encuesta

Una vez que tiene asignada una mesa, el cliente puede cargar una encuesta de satisfaccion

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/encuesta.jpg)

## PAGINA MOZO
Tareas que puede realizar un mozo: Asignar mesa a clientes en espera, buscar clientes por nombre de usuario, agregar clientes a la lista de espera, atender a un cliente (cargar pedidos), cambiar el estado de las mesas.

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/mozo.jpg)

## Clientes en espera
  
Si no hay clientes en espera, el mozo ve lo siguiente: 

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/mozoSinClientesEspera.jpg)

Si hay clientes en espera, el mozo ve el listado de clientes en espera y puede seleccionar uno para asignarle una mesa:

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/mozoConClientesEspera.jpg)

## Buscar cliente

El mozo puede buscar un cliente por nombre de usuario para agregarlo a la lista de espera o cargarle un pedido:

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/mozoBuscarCliente.jpg)

## Agregar cliente a la lista de espera

Puede agregar el cliente buscado a la lista de espera

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/mozoAgregarCliente.jpg)

## Cargar pedidos

Si el cliente no se encuetra en espera y hay mesas disponibles, el mozo puede buscar un cliente y cargarle el pedido.

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/mozoCargarPedidos.jpg)

## Cambiar estado de las mesas

Las mesas tienen 5 estados: 
- Mesa asignada: cuando el cliente o el mozo eligen una mesa
- Mesa con cliente esperando pedido
- Mesa con clientes comiendo
- Mesa con clientes pagando
- Mesa cerrada

Al mozo se le muestran las mesas a partir de que se asignan, y tiene que ir cambiando el estado de la mesa al proximo estado a medida que éstos se van cumpliendo. Luego de pasar la mesa al siguiente estado de clientes comiendo, se cierra el ciclo del mozo, ya que el último paso, que es cerrar la mesa, solo puede hacerlo un socio 

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/mozoCambiarMesas.jpg)

## PAGINA SOCIO

Tareas que puede realizar un socio: Asignar un tipo de usuario a los usuarios registrados, ver el estado de todos los pedidos que no estan cerrados y filtrarlos por estado, cerrar mesas.

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/socio.jpg)


## Asignar tipo de usuario
Cuando los usuarios se registran, solo pueden asignar su nombre de usuario y clave. El socio asigna el tipo de usuario buscandolo por nombre de usuario.   

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/socioAsignar.jpg)


## Estado de pedidos

El socio puede ver los estados de todos los pedidos que no estan cerrados y filtrarlos por estado. 


![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/socioEstadoPedidos.jpg)


## Cerrar mesa

Las mesas solo las puede cerrar un socio.

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/socioCerrarMesa.jpg)


## PAGINA EMPLEADOS

Los empleados: Cocinero, Bartender, Cervecero y Pastelero pueden acceder a las mimas acciones:

Ver los pedidos pendientes y tomarlos para su preparacion y ver los pedidos en preparacion y servirlos. 


![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/empleado.jpg)


## Pedidos pendientes

El empleado puede tomar un pedido de la lista de pedidos pendientes, asignandole primero un tiempo estimado de preparación (en minutos)

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/empleadoPendientes.jpg)


## Pedidos en preparacion

El empleado puede tomar un pedido de la lista de pedidos en preparación y ponerlo para servir.

![alt text](https://github.com/seba0413/TP_Lab4_2c_2019/blob/master/imagenes/empleadoPreparacion.jpg)






