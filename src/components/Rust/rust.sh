function rust.run () {
  if [[ -f "Cargo.toml" ]]; then
    cargo run -q
  else
    for file in "$@"; do
      rustc ${file} -o ${file}.o
      ./${file}.o
      rm -rvf ./${file}.o >/dev/null 2>&1
    done
  fi
  return
}

function rust.compile () {
  if [[ -f "Cargo.toml" ]]; then
    cargo build -q
  else
    for file in "$@"; do
      rustc ${file} -o ${file}.o
    done
  fi
  return
}
