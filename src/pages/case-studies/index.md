---
layout: ../../layouts/TopicLayout.astro
title: "AI Security Case Studies | LLM Assessment | NETZY"
heading: "Case Studies"
description: "실제로 공개한 LLM 애플리케이션 보안 진단 사례: 관찰한 현상을 재현 가능한 취약점과 업무 영향으로 검증한 기록."
---

공개한 실제 진단 회고를 모읍니다. 결과뿐 아니라 검증 과정과 성립하지 않은 가설도 함께 기록합니다.

## LLM Security Assessment

Excel 업무 보조 LLM 서비스의 애플리케이션 계층을 대상으로 한 진단 회고입니다. 프롬프트 정책 우회, 오류 정보 노출, 환각에 의한 오정보, 생성 코드의 위험을 업무 시나리오와 연결합니다.

**핵심 질문:** 모델이 말한 동작은 실제로 일어났는가? 공격자가 재현할 수 있는가? 이 출력이 업무에 사용되면 어떤 피해 경로가 생기는가?

진단 대상과 기업 정보는 기존 글에서 일반화한 범위로만 다룹니다. [진단 방법론](/ai-security/methodology/)을 함께 읽으면 사례의 판단 과정을 이해할 수 있습니다.
