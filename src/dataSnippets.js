// Define a map of default code snippets for each language



export const dataSnippets = {
  ada: `-- Online Ada compiler to run Ada code online
with Ada.Text_IO; use Ada.Text_IO;

procedure Hello is
begin
   -- Write Ada code here
   Put_Line("Hello, World!");
end Hello;`,
  algol: `-- Online Algol 68 compiler to run Algol 68 code online
print(("Hello, World!", new_line))`,
  awk: `# Online AWK compiler to run AWK code online
BEGIN {
   # Write AWK code here
   print "Hello, World!"
}`,
  bash: `#!/bin/bash
# Online Bash compiler to run Bash script online
echo "Hello, World!"`,
  bc: `# Online BC compiler to run BC code online
scale = 10
# Write BC code here
print "Hello, World!"`,
  befunge: `# Online Befunge compiler to run Befunge code online
v
   >"dlroW ,olleH"v
       ^`,
  blockly: {
    dart: `// Online Blockly Dart compiler to run Dart code online
void main() {
   // Write Dart code here
   print("Hello, World!");
}`,
    lua: `-- Online Blockly Lua compiler to run Lua code online
-- Write Lua code here
print("Hello, World!")`,
    php: `<?php
// Online Blockly PHP interpreter to run PHP code online
echo "Hello, World!";
?>`,
    python: `# Online Blockly Python compiler to run Python code online
# Write Python code here
print("Hello, World!")`
  },
  brainfuck: `-- Online Brainfuck compiler to run Brainfuck code online
++++++++++[>+>+++>+++++++>++++++++++<<<<-]>>>++.>+.+++++++..+++.<<+++++++++++++.>++++.------------.---.<<+.`,
  c: `// Online C compiler to run C code online
#include <stdio.h>

int main() {
   // Write C code here
   printf("Hello, World!\\n");

   return 0;
}`,
  c99: `// Online C-99 compiler to run C-99 code online
#include <stdio.h>

int main() {
   // Write C-99 code here
   printf("Hello, World!\\n");

   return 0;
}`,
  clisp: `; Online CLISP interpreter to run CLISP code online
(write-line "Hello, World!")`,
  clojure: `; Online Clojure compiler to run Clojure code online
(println "Hello, World!")`,
  cobol: `IDENTIFICATION DIVISION.
PROGRAM-ID. HelloWorld.
PROCEDURE DIVISION.
   DISPLAY 'Hello, World!'.
   STOP RUN.`,
  coffeescript: `# Online CoffeeScript compiler to run CoffeeScript code online
# Write CoffeeScript code here
console.log "Hello, World!"`,
  cpp: `// Online C++ compiler to run C++ code online
#include <iostream>
using namespace std;

int main() {
   // Write C++ code here
   cout << "Hello, World!";

   return 0;
}`,
  cpp14: `// Online C++14 compiler to run C++14 code online
#include <iostream>
using namespace std;

int main() {
   // Write C++14 code here
   cout << "Hello, World!";

   return 0;
}`,
  cpp17: `// Online C++17 compiler to run C++17 code online
#include <iostream>
using namespace std;

int main() {
   // Write C++17 code here
   cout << "Hello, World!";

   return 0;
}`,
  csharp: `// Online C# compiler to run C# code online
class Program {
   static void Main() {
      // Write C# code here
      System.Console.WriteLine("Hello, World!");
   }
}`,
  d: `// Online D compiler to run D code online
import std.stdio;

void main() {
   // Write D code here
   writeln("Hello, World!");
}`,
  dart: `// Online Dart compiler to run Dart code online
void main() {
   // Write Dart code here
   print('Hello, World!');
}`,
  elixir: `# Online Elixir compiler to run Elixir code online
IO.puts "Hello, World!"`,
  erlang: `-module(hello).
-export([world/0]).

world() ->
   % Write Erlang code here
   io:format("Hello, World!~n").`,
  factor: `! Online Factor compiler to run Factor code online
"Hello, World!" print`,
  falcon: `# Online Falcon compiler to run Falcon code online
put "Hello, World!"`,
  fantom: `// Online Fantom compiler to run Fantom code online
class Main {
   Void main() {
      // Write Fantom code here
      echo("Hello, World!");
   }
}`,
  fasm: `; Online FASM compiler to run FASM code online
section '.data' writeable
hello db 'Hello, World!', 0

section '.text' executable
global _start

_start:
   ; Write FASM code here
   mov eax, 4
   mov ebx, 1
   mov ecx, hello
   mov edx, 13
   int 0x80

   mov eax, 1
   xor ebx, ebx
   int 0x80`,
  forth: `\\ Online Forth compiler to run Forth code online
: hello
   \\ Write Forth code here
   cr ." Hello, World!" cr ;

hello`,
  fortran: `! Online Fortran compiler to run Fortran code online
program HelloWorld
   ! Write Fortran code here
   print *, "Hello, World!"
end program HelloWorld`,
  freebasic: `'' Online FreeBASIC compiler to run FreeBASIC code online
Print "Hello, World!"`,
  fsharp: `// Online F# compiler to run F# code online
printfn "Hello, World!"`,
  gccasm: `// Online GCC Assembler compiler to run Assembly code online
section .data
hello db 'Hello, World!',0

section .text
global _start

_start:
   ; Write Assembly code here
   mov eax, 4
   mov ebx, 1
   mov ecx, hello
   mov edx, 13
   int 0x80

   mov eax, 1
   xor ebx, ebx
   int 0x80`,
  go: `// Online Go compiler to run Go code online
package main

import "fmt"

func main() {
   // Write Go code here
   fmt.Println("Hello, World!")
}`,
  groovy: `// Online Groovy compiler to run Groovy code online
class HelloWorld {
   static void main(String[] args) {
      // Write Groovy code here
      println "Hello, World!"
   }
}`,
  hack: `// Online Hack compiler to run Hack code online
<?hh
// Write Hack code here
echo "Hello, World!";`,
  haskell: `-- Online Haskell compiler to run Haskell code online
main :: IO ()
main = do
   -- Write Haskell code here
   putStrLn "Hello, World!"`,
  haxe: `// Online Haxe compiler to run Haxe code online
class Main {
   static function main() {
      // Write Haxe code here
      trace("Hello, World!");
   }
}`,
  icon: `# Online Icon compiler to run Icon code online
procedure main()
   -- Write Icon code here
   write("Hello, World!")
end`,
  intercal: `# Online Intercal compiler to run Intercal code online
DO ,1 <- #13
   1 SUB #1 <- #238
   PLEASE DO ,1 SUB #2 <- #108
   DO ,1 SUB #3 <- #111
   DO ,1 SUB #4 <- #111
   DO ,1 SUB #5 <- #114
   DO ,1 SUB #6 <- #100
   DO ,1 SUB #7 <- #33
   DO ,1 SUB #8 <- #10
DO ,1 SUB #9 <- #0
PLEASE WRITE ,1`,
  java: `// Online Java compiler to run Java code online
class HelloWorld {
   public static void main(String[] args) {
      // Write Java code here
      System.out.println("Hello, World!");
   }
}`,
  jbang: `// Online JBang compiler to run JBang code online
//usr/bin/env jbang "$0" "$@" ; exit $?

class HelloWorld {
   public static void main(String[] args) {
      // Write JBang code here
      System.out.println("Hello, World!");
   }
}`,
  jlang: `-- Online J Language compiler to run J Language code online
echo 'Hello, World!'`,
  kotlin: `// Online Kotlin compiler to run Kotlin code online
fun main() {
   // Write Kotlin code here
   println("Hello, World!")
}`,
  lolcode: `HAI 1.2
CAN HAS STDIO?
VISIBLE "Hello, World!"
KTHXBYE`,
  lua: `-- Online Lua compiler to run Lua code online
-- Write Lua code here
print("Hello, World!")`,
  mozart: `-- Online Mozart/OZ compiler to run Mozart/OZ code online
functor import Application
define
   % Write Mozart/OZ code here
   {Application.showInfo "Hello, World!"}
end`,
  nasm: `section .data
hello db 'Hello, World!',0

section .text
global _start

_start:
   ; Write NASM Assembly code here
   mov eax, 4
   mov ebx, 1
   mov ecx, hello
   mov edx, 13
   int 0x80

   mov eax, 1
   xor ebx, ebx
   int 0x80`,
  nemerle: `// Online Nemerle compiler to run Nemerle code online
// Write Nemerle code here
System.Console.WriteLine("Hello, World!");`,
  nim: `# Online Nim compiler to run Nim code online
# Write Nim code here
echo "Hello, World!"`,
  nodejs: `// Online JavaScript compiler to run JavaScript code online
// Write JavaScript code here
console.log("Hello, World!");`,
  objc: `// Online Objective C compiler to run Objective C code online
#import <Foundation/Foundation.h>

int main() {
   // Write Objective C code here
   NSLog(@"Hello, World!");

   return 0;
}`,
  ocaml: `(* Online OCaml compiler to run OCaml code online *)
(* Write OCaml code here *)
print_endline "Hello, World!";`,
  octave: `% Online Octave compiler to run Octave code online
% Write Octave code here
disp('Hello, World!')`,
  pascal: `program HelloWorld;
begin
   { Online Pascal compiler to run Pascal code online }
   { Write Pascal code here }
   writeln('Hello, World!');
end.`,
  perl: `#!/usr/bin/perl
# Online Perl interpreter to run Perl code online
# Write Perl code here
print "Hello, World!\\n";`,
  php: `<?php
// Online PHP interpreter to run PHP code online
// Write PHP code here
echo "Hello, World!";
?>`,
  picolisp: `(println "Hello, World!")`,
  pike: `#!/usr/bin/pike
// Online Pike interpreter to run Pike code online
// Write Pike code here
write("Hello, World!\\n");`,
  prolog: `% Online Prolog interpreter to run Prolog code online
% Write Prolog code here
write('Hello, World!'), nl.`,
  python2: `# Online Python 2 interpreter to run Python 2 code online
# Write Python 2 code here
print "Hello, World!"`,
  python3: `# Online Python 3 interpreter to run Python 3 code online
# Write Python 3 code here
print("Hello, World!")`,
  r: `# Online R interpreter to run R code online
# Write R code here
cat("Hello, World!\\n")`,
  racket: `#lang racket
;; Online Racket interpreter to run Racket code online
;; Write Racket code here
(printf "Hello, World!\\n")`,
  rhino: `// Online Rhino JS interpreter to run Rhino JS code online
// Write Rhino JS code here
print("Hello, World!");`,
  ruby: `#!/usr/bin/ruby
# Online Ruby interpreter to run Ruby code online
# Write Ruby code here
puts "Hello, World!"`,
  rust: `// Online Rust compiler to run Rust code online
fn main() {
   // Write Rust code here
   println!("Hello, World!");
}`,
  scala: `// Online Scala compiler to run Scala code online
object HelloWorld {
   def main(args: Array[String]): Unit = {
      // Write Scala code here
      println("Hello, World!")
   }
}`,
  scheme: `; Online Scheme interpreter to run Scheme code online
; Write Scheme code here
(display "Hello, World!") (newline)`,
  smalltalk: `Object subclass: HelloWorld [
   HelloWorld class >> main [
      Transcript show: 'Hello, World!'; nl.
   ]
]

HelloWorld main.`,
  spidermonkey: `// Online SpiderMonkey interpreter to run SpiderMonkey code online
// Write SpiderMonkey code here
print('Hello, World!');`,
  sql: `-- Online SQL interpreter to run SQL code online
-- Write SQL code here
SELECT 'Hello, World!' AS greeting;`,
  swift: `// Online Swift compiler to run Swift code online
print("Hello, World!")`,
  tcl: `# Online TCL interpreter to run TCL code online
# Write TCL code here
puts "Hello, World!"`,
  unlambda: `# Online Unlambda interpreter to run Unlambda code online
# Write Unlambda code here
`,

  vbn: `Module Module1
   ' Online VB.Net compiler to run VB.Net code online
   ' Write VB.Net code here
   Sub Main()
      Console.WriteLine("Hello, World!")
   End Sub
End Module`,
  verilog: `// Online Verilog compiler to run Verilog code online
// Write Verilog code here
initial begin
   $display("Hello, World!");
   $finish;
end`,
  whitespace: `-- Online Whitespace interpreter to run Whitespace code online
-- Write Whitespace code here
`,
  yabasic: `REM Online Yabasic interpreter to run Yabasic code online
REM Write Yabasic code here
PRINT "Hello, World!"
` };


