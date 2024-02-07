use crate::{model::book_model::Book,controller::mongodb_rep::MongoRep};
use mongodb::{bson::oid::ObjectId, results::InsertOneResult};
use rocket::{http::Status, serde::json::Json, State};

#[get("/books")]
pub fn get_all_books(db: &State<MongoRep>) -> Result<Json<Vec<Book>>, Status> {
    let users = db.get_all_books();

    match users {
        Ok(users) => Ok(Json(users)),
        Err(_) => Err(Status::InternalServerError),
    }
}