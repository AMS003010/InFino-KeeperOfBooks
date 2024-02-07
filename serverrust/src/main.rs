#[macro_use] extern crate rocket;

#[get("/")]
fn say_hello() -> &'static str {
    "Hello from rust"
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/Rust/api",routes![say_hello])
}