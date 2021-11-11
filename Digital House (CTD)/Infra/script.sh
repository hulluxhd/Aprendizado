#! /bin/bash

for word in $(cat lista_nomes.txt)
do
 if [ $word = "Marcel" ]; then
  	echo "Encontrei o $word"
 else
	  echo "O nome é $word"
	  let a=$a+1
 fi
done

echo a

