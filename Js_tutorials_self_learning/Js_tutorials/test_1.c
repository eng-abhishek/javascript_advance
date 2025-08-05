#include <iostream>
#include <graphics.h>  // Turbo C++ specific graphics library
#include <dos.h>       // For delay and sound
#include <conio.h>
#include <stdlib.h>

using namespace std;

union REGS i, o;

// Function prototypes
int initmouse();
void showmouseptr();
void restrictmouseptr(int, int, int, int);
void getmousepos(int *, int *, int *);
void format();
void graph();
void welcome();
void boundary();

int vote1 = 0, vote2 = 0, vote3 = 0, vote4 = 0, vote5 = 0; // Variables for votes
int button, x, y;

int main() {
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "C:\\TC\\BGI");  // Initialize graphics mode
    randomize();

    boundary();
    welcome();
    cleardevice();
    format();
    showmouseptr();
    restrictmouseptr(0, 0, 675, 435);

    do {
        getmousepos(&button, &x, &y);

        if ((button & 1) == 1 && x > 475 && x < 580 && y > 250 && y < 280) {
            break;
        } else if ((button & 1) == 1 && x > 280 && x < 380 && y > 105 && y < 125) {
            setcolor(RED);
            circle(270, 115, 5);
            sound(1200);
            delay(500);
            nosound();
            setcolor(BLACK);
            circle(270, 115, 5);
            vote1++;
        } else if ((button & 1) == 1 && x > 280 && x < 380 && y > 155 && y < 175) {
            setcolor(RED);
            circle(270, 165, 5);
            sound(1200);
            delay(500);
            nosound();
            setcolor(BLACK);
            circle(270, 165, 5);
            vote2++;
        } else if ((button & 1) == 1 && x > 280 && x < 380 && y > 205 && y < 225) {
            setcolor(RED);
            circle(270, 215, 5);
            sound(1200);
            delay(500);
            nosound();
            setcolor(BLACK);
            circle(270, 215, 5);
            vote3++;
        } else if ((button & 1) == 1 && x > 280 && x < 380 && y > 255 && y < 275) {
            setcolor(RED);
            circle(270, 265, 5);
            sound(1200);
            delay(500);
            nosound();
            setcolor(BLACK);
            circle(270, 265, 5);
            vote4++;
        } else if ((button & 1) == 1 && x > 280 && x < 380 && y > 305 && y < 325) {
            setcolor(RED);
            circle(270, 315, 5);
            sound(1200);
            delay(500);
            nosound();
            setcolor(BLACK);
            circle(270, 315, 5);
            vote5++;
        }
    } while (true);

    cleardevice();
    showmouseptr();
    boundary();
    graph();

    getch();
    closegraph();
    return 0;
}

void boundary() {
    setcolor(1 + rand() % 14);
    rectangle(0, 0, 635, 475);
    setcolor(1 + rand() % 14);
    rectangle(3, 3, 632, 472);
}

void welcome() {
    randomize();
    settextstyle(8, 0, 4);
    setcolor(1 + rand() % 14);
    outtextxy(200, 100, "WELCOME");
    delay(800);
    setcolor(1 + rand() % 14);
    outtextxy(250, 160, "TO");
    delay(800);
    setcolor(1 + rand() % 14);
    outtextxy(50, 220, "ELECTRONIC VOTING SYSTEM");
    delay(800);

    while (!kbhit()) {
        setcolor(1 + rand() % 14);
        outtextxy(50, 400, "Press any key to continue");
        delay(500);
        setcolor(BLACK);
        outtextxy(50, 400, "Press any key to continue");
        delay(500);
    }
}

void format() {
    setcolor(6);
    rectangle(90, 30, 400, 380);
    rectangle(87, 27, 403, 383);
    settextstyle(0, 0, 5);
    outtextxy(140, 40, "E V M");
    line(90, 80, 400, 80);
}

void showmouseptr() {
    i.x.ax = 1;
    int86(0x33, &i, &o);
}

void restrictmouseptr(int x1, int y1, int x2, int y2) {
    i.x.ax = 7;
    i.x.cx = x1;
    i.x.dx = x2;
    int86(0x33, &i, &o);
    i.x.ax = 8;
    i.x.cx = y1;
    i.x.dx = y2;
    int86(0x33, &i, &o);
}

void getmousepos(int *button, int *x, int *y) {
    i.x.ax = 3;
    int86(0x33, &i, &o);
    *button = o.x.bx;
    *x = o.x.cx;
    *y = o.x.dx;
}

void graph() {
    outtextxy(200, 100, "RESULTS (in % votes)");

    int totalVotes = vote1 + vote2 + vote3 + vote4 + vote5;
    if (totalVotes == 0) totalVotes = 1; // Prevent division by zero

    int candidate1 = (vote1 * 100) / totalVotes;
    int candidate2 = (vote2 * 100) / totalVotes;
    int candidate3 = (vote3 * 100) / totalVotes;
    int candidate4 = (vote4 * 100) / totalVotes;
    int candidate5 = (vote5 * 100) / totalVotes;

    setcolor(2);
    rectangle(100, 300, 130, 300 - candidate1);
    rectangle(200, 300, 230, 300 - candidate2);
    rectangle(300, 300, 330, 300 - candidate3);
    rectangle(400, 300, 430, 300 - candidate4);
    rectangle(500, 300, 530, 300 - candidate5);

    outtextxy(550, 400, "EXIT");

    do {
        getmousepos(&button, &x, &y);
        if ((button & 1) == 1 && x > 545 && x < 600 && y > 400 && y < 430) {
            break;
        }
    } while (true);
}
