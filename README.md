# Angular-Modulo4

Para tener mas dinamismo cree un google docs con la misma información que presentare a continuación pero con imagenes y videos:
https://docs.google.com/document/d/1zZsn6CgPN8xgpVmD9cMYyYXUFJQv4HblTxZ2rbY-2n8/edit?usp=sharing

Para esta entrega se creó un front end utilizando angular que conectaría con nuestro Backend, para mi proyecto yo utilice de forma completa el back end del anterior módulo, ya que conocer los tipos y los servicios era ventajoso al momento de consumirlos servicios, a continuación hablaré de forma específica sobre mi front end con relación a la rúbrica donde hablaré de todos los elementos que conforman mi proyecto:

Funcionalidad:  La app tiene la funcionalidad principal de guardar películas que has visto, y su característica principal es la de buscar películas con toda su información e incluso link solo con el nombre de la película, en el Dashboard principal se nos presenta un botón con la leyenda search a movie que al presionarlo nos abre una ventana de diálogo donde podemos interactuar de forma dinámica al insertar un nombre de pelicula y se nos presenta todos sus datos y la posibilidad de guardarla película en nuestro repositorio.


Templates: Para la creación de las templates mi objetivo principal fue que fuera muy dinámico para el usuario utilizar la página, es por eso que desde que entramos vemos botones con los que podemos interactuar, como el de login que nos abre ventana de diálogo que nos redirecciona automáticamente a Dashboard, lo que permite una experiencia fluida, de igual forma los servicios CRUD de la base de datos se hacen todos desde el Dashboard solo oprimiendo botones que lanzan ventanas de diálogo, lo cual creo la hace muy dinámica e intuitiva


Alcance: Como ya se menciono mi aplicación utiliza todos los métodos Rest del back end del anterior módulo y correctamente muestra al usuario los cambios, al utilizar botones interactivos que no obstaculizan el uso de los métodos Rest, además quiero resaltar la lógica utilizada detrás de de todas las ventanas de diálogo, ya que fue todo un reto implementarlas de esta forma, quisiera invitar a revisar la parte del módulo de dashboard y todos los componentes de las ventanas de diálogo, sobre todo el de update ya que fue el que más retos presento.

A Continuación veremos un video con el funcionamiento del botón de Modify Entry. (duración 30 seg)
https://youtu.be/sBlsiDBqxbI

Navegabilidad: El front End cuenta con navegación por rutas, sin embargo trate de que fueran solo las indispensables para tener una integración más sencilla y breve, además que cuenta con un AuthGuard que protege la ruta del Dashboard, ya que en el dashboard es donde se consumen los métodos Rest, se implementó una lógica, de forma que si existía un login, se podría acceder pero de no tenerlo nos regresaría a la página principal, el componente de servicio alberga la lógica de las funciones de login y dentro del autoguard se inyecta para hacer uso de la función, así como también se utiliza en la ventana de diálogo de Login donde también se inyecta el componente de servicios y es en donde se ejecuta la función de login que permite regresar un valor de true en el AutoGuard


Modularidad: La distribución del proyecto es pensado para que sea altamente modular, se crearon diferentes módulos, así como un módulo compartido para componentes comunes como el navbar y el footer, asi como módulos que se dividen por funcionalidad, lo que permite un mayor orden dentro del proyecto, cada módulo tiene asignado el nombre de su función, por ejemplo, Home, Login, Dashboard, Shared, etc.










 
