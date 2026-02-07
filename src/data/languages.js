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
} from "react-icons/si";
import { FaMicrochip } from "react-icons/fa";

export default [
    {
        id: "c",
        name: "C",
        icon: SiC,
        code: `#include <stdio.h>
  int main() {
    printf("Hello C");
    return 0;
  }`
    },

    {
        id: "cpp",
        name: "C++",
        icon: SiCplusplus,
        code: `#include <iostream>
  using namespace std;
  int main() {
    cout << "Hello C++";
    return 0;
  }`
    },

    {
        id: "python",
        name: "Python",
        icon: SiPython,
        code: `print("Hello Python")`
    },

    {
        id: "js",
        name: "JavaScript",
        icon: SiJavascript,
        code: `console.log("Hello JavaScript");`
    },

    {
        id: "java",
        name: "Java",
        //   icon: SiJava,
        icon: SiOpenjdk,
        code: `class Main {
    public static void main(String[] args) {
      System.out.println("Hello Java");
    }
  }`
    },
    {
        id: "go",
        name: "Go",
        icon: SiGo,
        code: `package main
  import "fmt"
  func main() {
    fmt.Println("Hello Go")
  }`
    },

    {
        id: "rust",
        name: "Rust",
        icon: SiRust,
        code: `fn main() {
    println!("Hello Rust");
  }`
    },

    {
        id: "kotlin",
        name: "Kotlin",
        icon: SiKotlin,
        code: `fun main() {
    println("Hello Kotlin")
  }`
    },

    {
        id: "php",
        name: "PHP",
        icon: SiPhp,
        code: `<?php
  echo "Hello PHP";
  ?>`
    },

    {
        id: "ruby",
        name: "Ruby",
        icon: SiRuby,
        code: `puts "Hello Ruby"`
    },

    {
        id: "html",
        name: "HTML",
        icon: SiHtml5,
        code: ""
    },

    {
        id: "typescript",
        name: "TypeScript",
        icon: SiTypescript,
        code: `const msg: string = "Hello TypeScript";
      console.log(msg);`
    },


    {
        id: "swift",
        name: "Swift",
        icon: SiSwift,
        code: `import Foundation
      
      print("Hello Swift")`
    }

    ,
    {
        id: "r",
        name: "R",
        icon: SiR,
        code: `print("Hello R")`
    }
    ,

];
