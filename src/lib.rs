use std::ffi::CString;

#[no_mangle]
pub fn data_dir() -> *mut i8 {
    CString::new(dirs::data_dir().unwrap().display().to_string())
        .unwrap()
        .into_raw()
}
