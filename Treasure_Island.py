print(''' ,d                                                                       
  88                                                                       
MM88MMM 8b,dPPYba,  ,adPPYba, ,adPPYYba, ,adPPYba, 88       88 8b,dPPYba,  
  88    88P'   "Y8 a8P_____88 ""     `Y8 I8[    "" 88       88 88P'   "Y8  
  88    88         8PP""""""" ,adPPPPP88  `"Y8ba,  88       88 88          
  88,   88         "8b,   ,aa 88,    ,88 aa    ]8I "8a,   ,a88 88          
  "Y888 88          `"Ybbd8"' `"8bbdP"Y8 `"YbbdP"'  `"YbbdP'Y8 88      ''' )

print("Welcome to Treasure Island.\n Yout mission is to find the treasure.")
direction=input("Enter the direction left or right?").lower()

if direction=='right':
    print("You fall into a dig")
elif direction=="left":
    choice=input("Do you want to swim or wait?").lower()
    if choice=="swim":
        print("Omg Shark is there you lose!!")
    elif choice=="wait":
        door=input("Which door you want to go in? Red/Blue/Yellow").lower()
        if door=="red":
            print("You caught Fire you lose")
        elif door=="blue":
            print("Tsunami !! You lose")
        elif door=="yellow":
            print("Party hard!!! You win.")

