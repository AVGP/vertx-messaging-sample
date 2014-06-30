vertx-messaging-sample
======================

EnterJS 2014 samples for the Vert.x talk. The slides can be found [here](http://bit.ly/enterjs-vertx)

# Content
This contains two samples:

1. Simple: Messaging between multiple verticles (`web`and `worker` directories)
2. Bridge: Messaging between verticles and the browser (`bridge` and `worker` directories)

# Setup with Vagrant
To spin it up easily, I suggest using [Vagrant](http://vagrantup.com) like this:

```shell
  $ git clone git@github.com:AVGP/vertx-messaging-sample.git
  $ vagrant up
```

This will start 3 machines:

- web1
- worker1
- worker2

Though the names help distinguish which verticle is intended to run on each of them,
you can run everything on one machine.

However, that defeats the purpose of a distributed system a bit ;-)

# Important note for the samples:
The samples assume that you're running at least one instance of the `worker` and one instance of the `web` or `bridge` verticle.

# Running the web server verticle
To launch the verticles, you ssh into a vagrant instance (web1, worker1 or worker2) and launch the code:

```shell
  $ vagrant ssh web1
  vagrant@web1: $ cd /vagrant
  vagrant@web1: $ vertx/bin/vertx run web/server.js -cluster -clusterHost 192.168.50.2
```

If you see `Succeeded in deploying verticle`
you should be able to see the frontend at [http://192.168.50.2:8000](http://192.168.50.2:8000).

**Note**: If the private networking doesn't work on your machine,
the Port 8000 on the `web1` machine is also forwarded to [http://localhost:8080](http://localhost:8080).

# Running the worker verticle
To launch the verticle, you ssh into a vagrant instance (web1, worker1 or worker2) and launch the code:

```shell
  $ vagrant ssh worker1
  vagrant@worker1: $ cd /vagrant
  vagrant@worker1: $ vertx/bin/vertx run worker/worker.js -cluster -clusterHost 192.168.50.10
```

If you see `Succeeded in deploying verticle` you can use the web server to start jobs, by going to [http://192.168.50.2:8000/start].
You should now see some activity in the worker logs.

# Running the bridge example
To run the browser example, you can ssh into a vagrant instance and run:

```shell
  $ vagrant ssh web1
  vagrant@web1: $ cd /vagrant/bridge
  vagrant@web1: $ ../vertx/bin/vertx run app.js -cluster -clusterHost 192.168.50.2
```

If you see `Succeeded in deploying verticle` you can use the web server to start jobs, by going to [http://192.168.50.2:8000].
You should now see some activity in the worker logs and the results in the browser.
