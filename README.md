# Scratch Block Maker
Create blocks for custom scratch extensions easily
### The old way:
```js
{
    opcode: "ternary",
    blockType: Scratch.BlockType.REPORTER,
    text: "if [condition] then [yes] else [no]",
    arguments: {
        condition: {
            type: Scratch.ArgumentType.BOOLEAN
        },
        yes: {
            type: Scratch.ArgumentType.STRING,
            menu: "menu",
            defaultValue: "default"
        },
        no: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 0
        }
    }
}
```
### The new way:
```js
block("(ternary):if <condition> then [yes;menu;default] else (no;0)")
```
### Minimal boilerplate
Everything is in a single line
### Easy to learn
Minimal and intuitive syntax
### Flexible
Need more options? Pass an object to the second argument
### But...
You can't use any brackets outside of defining types, which aren't suitable for blocks anyway
