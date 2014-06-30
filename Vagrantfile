# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box_url = "https://mega.co.nz/#!yAcBUYrb!xvdYGFHcz541sW5eL1wJcL6KhVyHUz3Yu42Qtcqck-Q"
  config.vm.box = "debian73"

  config.vm.define "web1" do |web1|
    web1.vm.hostname = "web1"
    web1.vm.network "private_network", ip: "192.168.50.2"
    web1.vm.network :forwarded_port, guest: 8000, host: 8080
    web1.vm.synced_folder ".", "/vagrant", type: "nfs", mount_options: ["noatime"]
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
