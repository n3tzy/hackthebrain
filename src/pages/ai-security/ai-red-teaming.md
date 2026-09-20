---
layout: ../../layouts/TopicLayout.astro
title: "AI 레드팀 · 공격 시나리오 검증 | AI Red Teaming | NETZY"
heading: "AI Red Teaming"
description: "공격자 관점의 가설을 재현성과 증적으로 검증하는 AI Red Teaming: 정책 우회, 도구 오용, 데이터 노출과 업무 영향."
---

AI systems evaluated from an attacker's perspective.

공격 시도가 성공한 것처럼 보이는 답변만으로 결론을 내리지 않습니다. 접근 범위, 실제 실행, 재현 조건, 업무 영향을 연결하고 성립하지 않는 가설도 기록합니다.

## Attack scenario validation

- **Prompt Injection · Jailbreak** — 역할 변경이나 지시 우선순위 조작이 업무 정책에 미치는 영향을 확인합니다.
- **Tool Abuse · Excessive Agency** — 도구 호출과 생성된 코드를 구분하여 실행 주체와 권한을 확인합니다.
- **RAG Attacks · Data Leakage** — 검색·데이터 연결이 실제로 존재하는지 먼저 확인하고, 노출된 정보의 출처를 검증합니다.
- **재현성** — 공격자의 접근 조건에서 동일한 결과가 반복되는지 기록합니다.

## 성립하지 않는 시나리오도 결과다

공개 회고에서는 지속 학습과 세션 간 공유를 전제한 데이터 출처 세탁 가설을 제외했습니다. 해당 환경은 고정된 추론 모델과 격리된 세션을 사용했기 때문입니다. 가설을 실제 구조와 대조하는 과정이 진단의 일부입니다.

[Vulnerability Build Loop](/ai-security/methodology/#vulnerability-build-loop)에서 이상 응답을 발견한 뒤 어떤 증거를 더 확인하는지 살펴볼 수 있습니다.
