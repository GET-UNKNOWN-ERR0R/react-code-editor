import {
    SiC,
    SiCplusplus,
    SiPython,
    SiJavascript,
    SiOpenjdk,
    SiDotnet,
    SiGo,
    SiRust,
    SiKotlin,
    SiPhp,
    SiRuby,
    SiHtml5,
    SiTypescript,
    SiSwift,
    SiR,
    SiGnubash,
    SiScala,
    SiPerl,
    SiLua,

} from "react-icons/si";

import { FaMicrochip } from "react-icons/fa";
import { VscTerminalPowershell } from "react-icons/vsc";
import { SiApachegroovy } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiHaskell } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { SiJulia } from "react-icons/si";
import { VscTerminal } from "react-icons/vsc";
import { FaLinux } from "react-icons/fa";


export default [
    {
        id: "c",
        name: "C",
        icon: SiC,
        judge0: 50,
        code: `#include <stdio.h>
int main() {
  printf("Hello CodePILOT");
 return 0;
}`
    },
    {
        id: "cpp",
        name: "C++",
        icon: SiCplusplus,
        judge0: 54,
        code: `#include <iostream>
using namespace std;
   int main() {
    cout << "Hello CodePILOT";
 return 0;
}`

    },

    {
        id: "java",
        name: "Java",
        icon: SiOpenjdk,
        judge0: 62,
        code: `class Main {
  public static void main(String[] args) {
    System.out.println("Hello CodePILOT");
  }
}`
    },
    {
        id: "python",
        name: "Python",
        icon: SiPython,
        judge0: 71,
        code: `print("Hello CodePILOT")`
    },
    {
        id: "js",
        name: "JavaScript",
        icon: SiJavascript,
        judge0: 63,
        code: `console.log("Hello CodePILOT");`
    },
    {
        id: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        judge0: 74,
        code: `const msg: string = "Hello CodePILOT";
console.log(msg);`
    },
    {
        id: "go",
        name: "Go",
        icon: SiGo,
        judge0: 60,
        code: `package main
import "fmt"
func main() {
  fmt.Println("Hello CodePILOT")
}`
    },
    {
        id: "rust",
        name: "Rust",
        icon: SiRust,
        judge0: 73,
        code: `fn main() {
  println!("Hello CodePILOT");
}`
    },
    {
        id: "kotlin",
        name: "Kotlin",
        icon: SiKotlin,
        judge0: 78,
        code: `fun main() {
  println("Hello CodePILOT")
}`
    },
    {
        id: "swift",
        name: "Swift",
        icon: SiSwift,
        judge0: 83,
        code: `import Foundation
print("Hello CodePILOT")`
    },
    {
        id: "php",
        name: "PHP",
        icon: SiPhp,
        judge0: 68,
        code: `<?php
echo "Hello CodePILOT";
?>`
    },
    {
        id: "ruby",
        name: "Ruby",
        icon: SiRuby,
        judge0: 72,
        code: `puts "Hello CodePILOT"`
    },


    {
        id: "r",
        name: "R",
        icon: SiR,
        judge0: 80,
        code: `cat("Hello CodePILOT")`
    },
    {
        id: "shell",
        name: "Shell",
        icon: SiGnubash,
        judge0: 46,
        code: `#!/bin/sh
echo "Hello CodePILOT"`
    },
    {
        id: "bash",
        name: "Bash",
        icon: FaLinux,
        code: `#!/bin/bash
echo "Hello CodePILOT"`
    },
    {
        id: "groovy",
        name: "Groovy",
        icon: SiApachegroovy,
        judge0: 88,
        code: `println "Hello CodePILOT"`
    },
    {
        id: "scala",
        name: "Scala",
        icon: SiScala,
        judge0: 81,
        code: `object Main {
  def main(args: Array[String]) = {
    println("Hello CodePILOT")
  }
}`
    },
    {
        id: "perl",
        name: "Perl",
        icon: SiPerl,
        judge0: 85,
        code: `print "Hello CodePILOT\n";`
    },
    {
        id: "lua",
        name: "Lua",
        icon: SiLua,
        judge0: 64,
        code: `print("Hello CodePILOT")`
    },
    {
        id: "d",
        name: "D",
        icon: VscTerminal,
        judge0: 56,
        code: `import std.stdio;
 void main() {
    writeln("Hello CodePILOT");
    }`
    },
    {
        id: "objectivec",
        name: "ObjectiveC",
        icon: FaCode,
        judge0: 79,
        code: `#import <Foundation/Foundation.h>
      
      int main() {
        @autoreleasepool {
          NSLog(@"Hello CodePILOT");
        }
        return 0;
      }`
    },
    {
        id: "assembly",
        name: "Assembly",
        icon: FaMicrochip,
        judge0: 45,
        code: `section .data
      msg db "Hello CodePILOT",10
      
      section .text
      global _start
      
      _start:
      mov rax, 1
      mov rdi, 1
      mov rsi, msg
      mov rdx, 15
      syscall
      
      mov rax, 60
      xor rdi, rdi
      syscall`
    },
    {
        id: "html",
        name: "HTML",
        icon: SiHtml5,
        judge0: null,
        code: "<h1>Hello CodePilot</h1>"
    },

    {
        id: "html",
        name: "CSS",
        icon: SiCss3,
        judge0: null,
    },

];
