# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_url = "https://dl.dropboxusercontent.com/u/197673519/debian-7.2.0.box"
  config.vm.box = "debian72"
  config.vm.provision "shell", inline: "apt-get update && apt-get install -y openjdk-7-jre-headless && update-alternatives --set java /usr/lib/jvm/java-7-openjdk-amd64/jre/bin/java"

  config.vm.define "web1" do |web1|
    web1.vm.hostname = "web1"
    web1.vm.network "private_network", ip: "192.168.50.2"
    web1.vm.network :forwarded_port, guest: 8000, host: 8080
  end

  config.vm.define "worker1" do |db|
    db.vm.network "private_network", ip: "192.168.50.10"
    db.vm.hostname = "worker1"
  end

  config.vm.define "worker2" do |db|
    db.vm.network "private_network", ip: "192.168.50.11"
    db.vm.hostname = "worker2"
  end
end
