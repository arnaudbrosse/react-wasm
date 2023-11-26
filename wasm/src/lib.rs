use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn compute_sum(length: i32) -> i32 {
    let array: Vec<i32> = (1..=length).collect();
    return sum(&array);
}


fn sum(array: &Vec<i32>) -> i32 {
    array.iter().sum()
}
