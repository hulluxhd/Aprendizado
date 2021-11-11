#!/bin/bash

import fileinput

b = 0

for a in fileinput.input("//home/hullux/Área de trabalho/Aprendizado/Digital House (CTD)/Infra/lista_nomes.txt"):
	if a.strip() == "Marcel":
		print("Encontrei o ", a)
		
	else:
		b += 1
		print(a)
print(b)
