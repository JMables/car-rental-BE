const knex = require( "../data/dbconfig");

async function getAllVehicles() {
  return knex("vehicle").select("*");
}

function findVehicleById(id) {
  return knex("vehicles").select("*").where({id: id}).first();
}

function insertVehicles(new_vehicle) {
  return knex( "vehicles").insert(new_vehicle);
}

function updateVehicle(id, changes){
  return knex("vehicle").where({id}).update(changes).first();
}

function deleteVehicle(id){
  return knex("vehicles").where({id}).del();
}

module.exports = {
  getAllVehicles,
  findVehicleById,
  insertVehicles,
  updateVehicle,
  deleteVehicle,
};