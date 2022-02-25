use std::ffi::CString;

macro_rules! gen {
    ($($name: ident )+) => {
        $(
        #[no_mangle]
        pub fn $name() -> *mut i8 {
            (|| {
                Some(
                    CString::new(dirs::$name()?.display().to_string())
                        .ok()?
                        .into_raw(),
                )
            })()
            .unwrap_or(std::ptr::null_mut())
        }
        )+
    };
}

gen!(
audio_dir
cache_dir
config_dir
data_dir
data_local_dir
desktop_dir
document_dir
download_dir
executable_dir
font_dir
home_dir
picture_dir
preference_dir
public_dir
runtime_dir
state_dir
template_dir
video_dir
);
