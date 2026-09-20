---
layout: ../../layouts/TopicLayout.astro
title: "LLM 보안 진단 · 취약점 검증 | LLM Security | NETZY"
heading: "LLM Security"
description: "Prompt Injection, 환각, 도구 권한과 출력 검증을 중심으로 LLM 응답을 실제 보안 영향과 구분하는 연구 기록."
---

LLM 보안 진단에서는 그럴듯한 답변과 검증된 서비스 동작을 분리하는 일이 중요합니다. 공개 회고는 Excel 업무 보조 LLM 애플리케이션의 블랙박스 진단을 다룹니다.

## 검증할 질문

- **Prompt Injection** — 사용자 입력이 원래의 업무 정책을 우회하게 하는가?
- **System Prompt Leakage** — 노출된 것처럼 보이는 지침이 실제 설정인지, 생성된 텍스트인지 확인했는가?
- **Hallucination** — 허위 데이터·출처가 업무에 사용되는 구체적인 경로가 있는가?
- **Excessive Agency · Tool Security** — 모델의 주장과 도구 실행 증적이 일치하는가? 허용된 권한 범위는 무엇인가?
- **RAG Security** — 검색 계층이 존재하는가? 문서 접근 권한과 데이터 경계를 확인할 수 있는가?
- **Output Validation** — 응답·CSV·생성 코드가 후속 업무에서 어떻게 소비되는가?

## 공개 기록의 범위

대표 글은 애플리케이션 계층에 집중합니다. 모델 내부 점검이나 독립적인 RAG 진단을 수행했다고 확대 해석하지 않습니다. [Methodology](/ai-security/methodology/)의 검증 단계를 통해 증적과 가설을 구분합니다.

[AI Security 학습 기록](/posts/ai-sec-curriculum/)과 [LLM 관련 글](/tags/llm/)도 함께 볼 수 있습니다.
