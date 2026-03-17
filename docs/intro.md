---
sidebar_position: 1
slug: /intro
---

# 项目总览

欢迎来到克隆地球（Earth Clone）知识库。

## 什么是克隆地球

克隆地球是一个致力于构建实时在线数字地球的技术探索项目。我们的目标是利用公开地理数据与现代游戏引擎，在数字世界中还原一颗真实的地球。

## 核心目标

- 实现全球地形的实时渲染
- 接入建筑、道路、水域等地理要素
- 支持植被覆盖和动态交通
- 探索可复现、可扩展的数字地球技术路径

## 技术选型

| 方向 | 选型 |
|------|------|
| 渲染引擎 | Unreal Engine 5 |
| 加载架构 | 自研 QuadTree 流式系统 |
| 投影方式 | Mercator + 四叉树瓦片 |
| 数据来源 | OpenStreetMap / 公开 DEM |
| 官网框架 | Docusaurus |

## 知识库导航

本知识库按以下专题组织：

- [架构设计](/docs/architecture/overview) — 项目整体技术架构
- [地形系统](/docs/terrain/intro) — 全球地形渲染方案
- [建筑系统](/docs/buildings/intro) — 三维建筑生成
- [道路系统](/docs/roads/intro) — 路网数据与渲染
- [流式加载](/docs/streaming/intro) — QuadTree 加载系统
- [数据流程](/docs/data-pipeline/intro) — 数据处理 pipeline
- [参考资料](/docs/references/intro) — 相关技术与论文
