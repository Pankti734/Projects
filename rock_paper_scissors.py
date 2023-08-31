import random
rock="""
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
"""

scissors="""
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""

paper="""
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
"""

shape=int(input("What do you choose? Type 0 for Rock, 1 for Paper or 2 for Scissors."))
if shape==0:
    print(rock)
if shape == 1:
    print(scissors)
elif shape==2:
    print(paper)


com_choice=random.randint(0,2)
if com_choice==0:
    print("computer chose rock")
    print(rock)
if com_choice==1:
    print("computer chose scissors")
    print(scissors)
elif com_choice==2:
    print("computer chose scissors")
    print(paper)

if shape==com_choice:
    print("it's a draw")
elif shape==0 and com_choice==1:
    print("You loose!!")
elif shape==0 and com_choice==2:
    print("You win!!")
elif shape==1 and com_choice==0:
    print("You win!!")
elif shape==1 and com_choice==2:
    print("You loose")
elif shape==2 and com_choice==1:
    print("You win")
elif shape==2 and com_choice==0:
    print("You loose")
else:
    print("You typed invalid number!! GAME OVER")

