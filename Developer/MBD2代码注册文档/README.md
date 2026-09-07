# MB2 注册文档索引
> 调研对象: multiblocked2-1.20.1-1.0.39.jar + ldlib/assets/mbd2 (.sm/.mb/.rt NBT 定义)
> 所有类名/方法名/事件名均经 javap 反编译与 kubejs/probe 生成文件验证。

## 文档

| 文件 | 内容 |
|---|---|
| [MB2-Java注册文档.md](./MB2-Java注册文档.md) | Java 侧完整注册: 注册管线、NBT 资源注册、纯代码 Builder (单方块/部件/多方块)、全部配置类速查、Trait 详解、配方类型与配方、机器事件 Java 订阅、自定义扩展点。附录 A 含可整体复制的完整 Java 注册类 |
| [MB2-KubeJS注册文档.md](./MB2-KubeJS注册文档.md) | KubeJS 侧完整注册: 事件总览、机器/多方块/配方类型/配方、机器事件全表、类型提示、签名陷阱 (对象参数 vs 无参工厂) 与正确写法。附录 B 含可整体复制的完整 JS 示例 |
| [高级焦炉-Java注册.md](./高级焦炉-Java注册.md) | 实例: 高级焦炉 (reinforced_coke_oven) 纯 Java 注册 —— 5x5x5 结构/状态机/三特性/IE 配方代理逐字段还原自 ldlib NBT, 含 API 缺口说明与 NBT 兜底 |
| [高级焦炉-KubeJS注册.md](./高级焦炉-KubeJS注册.md) | 实例: 高级焦炉 KubeJS 注册 —— Java.loadClass 直连 API 绕过 event.create 的结构限制, 完整可跑脚本 |

## 三句话结论

1. Java 能注册一切 (机器/多方块/特性/配方类型/配方), 入口是 `MBDRegistryEvent.Machine` 等 mod bus 事件。
2. KubeJS 同样能注册 (`MBDRegistryEvents.machine` / `.recipeType`), 但机器 Builder 是裸 Java 反射,
   `machineSettings` 是**无参 Supplier 工厂**而非 builder 回调 —— 回调参数必为 any/undefined, 必须 return 配置对象。
3. Java、磁盘 NBT (ldlib/assets/mbd2)、KubeJS 三条来源共存于同一注册表, 顺序为
   Java → 磁盘 NBT → KubeJS, **同名后来者覆盖**; 混合注册细节见两份文档各自的最后一节。

## 速记: 两侧类型名不同!

| 概念 | Java 侧 (registerFromResource 的 type) | KubeJS 侧 (event.create 的 type) |
|---|---|---|
| 单方块 | `single_machine` | `single` |
| 多方块 | `multiblock` | `multiblock` |
| 动力机器 | `create_machine` | `kinetic` |
