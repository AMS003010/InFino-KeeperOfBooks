use std::env;

use dotenv::dotenv;

use mongodb::{
    bson::{doc, extjson::de::Error, oid::ObjectId},
    results::{InsertOneResult, UpdateResult, DeleteResult},
    sync::{Client, Collection},
};

use crate::model::book_model::Book;

pub struct MongoRep {
    col: Collection<Book>,
}

impl MongoRep {
    pub fn init() -> Self {
        dotenv().ok();
        let url = match env::var("MONGOURI") {
            Ok(v) => v,
            Err(_) => panic!("Error loading env variable"),
        };
        let client = Client::with_uri_str(&url).unwrap();
        let db = client.database("test");
        let col: Collection<Book> = db.collection("flask_datas");
        MongoRep { col }
    }

    pub fn get_all_books(&self) -> Result<Vec<Book>, Error> {
        let cursor = self
            .col
            .find(None, None)
            .expect("Error in getting all books");
        let users = cursor.map(|doc| doc.unwrap()).collect();
        Ok(users)
    }
}