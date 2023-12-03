use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn compute_sum(length: u64) -> u64 {
    let array: Vec<u64> = (1..=length).collect();
    return array.iter().copied().fold(0, |acc, current| acc.wrapping_add(current));
}
