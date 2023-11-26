# React-Wasm

This project combines React with WebAssembly (Wasm) for a high-performance web application. It utilizes Rust for Wasm module development and leverages `wasm-pack` for building and integrating Wasm into the web.

## Getting Started

1. Navigate to the `wasm` directory:

    ```bash
    cd wasm
    ```

2. Build the Rust code (execute in the `wasm` directory):

    ```bash
    cargo build
    ```

3. Build the Wasm module with the web target (execute in the `wasm` directory):

    ```bash
    wasm-pack build --target web
    ```

4. Return to the project's root:

    ```bash
    cd ..
    ```

5. Install project dependencies:

    ```bash
    yarn
    ```

6. Run the development server:

    ```bash
    yarn run dev
    ```
