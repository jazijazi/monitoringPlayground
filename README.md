# PROMETHEUS

> prometheus --> exporter (expose a endpoint) --> application

### use on server
+ useradd -rs /bin/false prometheus
+ mkdir /etc/prometheus
+ touch /etc/prometheus/prometheus.yml
+ mkdir -p /data/prometheus
+ chown prometheus:prometheus /etc/prometheus/* /data/prometheus
+ connect folders as volumes to prometheus container
+ get prometheus user id (cat /etc/passwd)
+ **run container with this userid**
+ docker run --user 997:997
+ if dont use docker must create a service & enable it

### use alertmanager
+ sudo useradd --system --no-create-home --shell /bin/false alertmanager

+ mkdir /alertmanager-data /etc/alertmanager

+ [read it](https://vrgl.ir/kM9dm)

1. add alert configuration to prometheus.yml
2. create groups with rules in (rule.yml)
**every rule have expr as condition to triger and labels for routing**
3. in alertmanager.yml define route with routes and receivers