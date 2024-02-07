use serde::{Serialize, Deserialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Book {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub name: Option<String>, // Change the type of name to Option<String>
    pub author: String,
    pub publication: String,
    pub series: String,
    pub borrowed: String,
    pub borrowed_on: String
}