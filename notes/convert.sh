#! /bin/bash
# convert.sh
# Convert all .wav files in this and all sub directories to .mp3
# Optional: Delete .wav files after conversion

export IFS=$'\n';
time for song in $(find -type f -iname '*.wav' |sed 's!\.wav$!!');
do
  echo -n "$song.mp3"
  lame -h -S "$song.wav" "$song.mp3";
  # uncomment the next line to delete .wav after conversion.
  rm "$song.wav";  
  echo -n " ";
done

