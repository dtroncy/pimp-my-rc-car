import piconzero as pz
import pygame
from pygame.locals import *

speed = 60
pz.init()
pygame.init()
screen = pygame.display.set_mode((480,500))

while True:

    for event in pygame.event.get():
        if event.type==pygame.QUIT:
            pygame.quit()
            exit(0)

        if event.type == pygame.KEYDOWN:
            if event.key==K_LEFT:
                pz.setMotor(1, -speed)
            elif event.key==K_RIGHT:
                pz.setMotor(1, speed)
            elif event.key==K_UP:
                pz.setMotor(0, speed)
            elif event.key==K_DOWN:
                pz.setMotor(0, -speed)

        if event.type == pygame.KEYUP:
            if event.key==K_LEFT:
                pz.setMotor(1, 0)
            elif event.key==K_RIGHT:
                pz.setMotor(1, 0)
            elif event.key==K_UP:
                pz.setMotor(0, 0)
            elif event.key==K_DOWN:
                pz.setMotor(0, 0) 