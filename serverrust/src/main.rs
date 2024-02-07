mod api;
mod model;
mod controller;

#[macro_use]
extern crate rocket;

use api::book_api::{get_all_books};
use controller::mongodb_rep::MongoRep;

#[launch]
fn rocket() -> _ {
    let db = MongoRep::init();
    rocket::build()
        .manage(db)
        .mount("/",routes![get_all_books])
}