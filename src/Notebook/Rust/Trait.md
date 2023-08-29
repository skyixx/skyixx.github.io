---
title: Trait
category:
  - 笔记
  - Rust
---

# 什么是 Trait?

- Trait 告诉编译器: 某种类型具有那些功能
- Trait 抽象地定义共享行为
- Trait bounds(约束): 泛型类型参数指定为实现特定行为的类型
- like 接口

# 定义 Trait

- 把方法签名放在一起,来实现某种目的所必须的一组行为
- 关键字: `trait`
- 只有方法签名,没有具体实现
- trait 可以有多个方法,以`;`结尾
- 实现该 trait 的类型必须提供具体的方法实现

```rust
//一个trait的定义
pub trait Summary {
    fn summarize(&self) -> String; // 没有方法体
    /*fn summarize1(&self) -> String;*/
}
```

# 在类型上实现 trait

- 与为类型实现方法类似
- 不同之处在于
  ```rust
  impl TraitName for TypeName {/* --snip-- */}
  ```
  在 impl 的块里面,需要对 Trait 里的方法签名进行具体的实现

# 实现 Trait 的约束

- 可以在某个类型上实现某个 trait 的前提条件是:
  - 这个类型或这个 trait 是本地 crate 定义的
- 无法为外部类型实现外部 trait
  - 限制程序属性的一部分(一致性)
  - 孤儿规则
  - 此规则确保其他人不能破坏你的代码,反之亦然
- 默认实现

```rust
pub trait Summary {
    fn summarise() -> String {
        //可以写出方法的具体实现
    }
}
```

- 默认实现可以调用 trait 中其他的方法(尽管未实现)
- 无法在重写实现调用默认实现

# Trait 作为参数

- `impl Trait` 语法: 适用于简单情况

将实现 Trait 的类型作为参数

```rust
pub trait TraitName {
    fn _nu_() -> String;
}

struct TypeName {}

impl TraitName for TypeName {
    fn _nu_() -> String {
        //--snip--
    }
}

fn notify(item: impl TraitName) {}

```

- `Trait bound`语法: 可用于复杂情况

```rust
fn notify<T: TraitName>(item: T) {}
```

- 使用`+`指定多个`Trait bound`

```rust
fn notify(item: impl Trait1 + Trait2) {} //要求item实现Trait1和Trait2这两个trait
// also
fn notify1<T: Trait1 + Trait2>(item: T) {}
```

- 使用`where`子句简化

```rust
fn notify<T, U>(a: T, b: U) -> String
where T: Trait1 + Traia2,
      U: Trait2 + Trait3,
{
    println!()
}
```

- 实现 Trait 作为返回类型
  - `impl Trait`
    ```rust
    fn notify(item: bool) -> impl Trait {}
    ```
  - 注意,反会类型只能是同一种类型!而不应该是多种实现 Trait 的类型
