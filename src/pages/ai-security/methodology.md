---
layout: ../../layouts/TopicLayout.astro
title: "AI 보안 진단 방법론 · LLM 취약점 검증 | NETZY"
heading: "AI Security Assessment Methodology"
description: "공개 LLM 진단 회고에서 정리한 9단계 검증 절차와 Vulnerability Build Loop: 관찰부터 재현·업무 영향·조치 보고까지."
---

이 페이지는 기존 공개 LLM 진단 회고에 나타난 판단 과정을 정리한 것입니다. 회사·고객 정보나 비공개 진단 결과를 추가하지 않습니다.

## Assessment workflow

1. **Scope the AI application** — 접근 가능한 UI·API와 진단에서 제외되는 모델 내부 영역을 구분합니다.
2. **Identify trust boundaries** — 사용자 입력, 시스템 지침, 연결 도구, 검색 데이터 사이의 경계를 확인합니다.
3. **Observe anomalous behavior** — 의심 응답과 발생 조건을 증적으로 남깁니다.
4. **Validate model / tool execution** — 모델이 주장한 동작을 실제 도구 구성·실행 결과와 교차 확인합니다.
5. **Verify reproducibility** — 공격자 관점에서 재현 조건과 반복 가능성을 확인합니다.
6. **Evaluate exploitability** — 해당 서비스의 권한과 업무 맥락에서 악용 가능한지 검토합니다.
7. **Map technical behavior to business impact** — 누가 어떤 출력을 신뢰하여 어떤 손실을 입는지 연결합니다.
8. **Build an attack chain** — 정보 수집, 정책 우회, 후속 피해의 흐름으로 증적을 배열합니다.
9. **Produce actionable remediation** — 원인과 대응 가능한 조치 지점을 보고합니다.

## Vulnerability Build Loop

Observed anomaly → Tool execution validation → Business exploitability → Reproducibility → Developer rebuttal filtering → Damage scenario → Security report

의심 현상 발견 → 도구 실행 교차 검증 → 업무 악용 가능성 → 재현성 → 개발팀 반박 가능성 검토 → 피해 시나리오 → 보고서.

선형 체크리스트를 한 번 통과하는 과정이 아닙니다. 증거가 부족하면 이전 단계로 돌아가며, 환경과 맞지 않는 가설은 제외합니다. 개발팀과 판단 기준을 합의하고 생성된 텍스트를 실제 실행 증거로 오인하지 않는 것이 핵심입니다.

## Security checklist / 진단 전 확인

- 진단 범위와 취약점 판단 기준을 개발팀과 합의했는가?
- RAG 사용 여부와 문서 조회 권한을 확인했는가?
- 로컬·클라우드 LLM 여부와 접근 가능한 공격 표면을 확인했는가?
- 연동 도구 목록과 실제 실행 확인 수단이 있는가?
- 환각과 실제 데이터 접근을 구분했는가?
- 재현 조건, 제외한 가설, 업무 영향, 조치 방안을 함께 기록했는가?

대표 회고의 오류 처리·응답 제어·출력 정책 조치는 각 관찰 결과와 함께 읽어야 합니다. 이 요약을 모든 AI 시스템에 대한 완결된 점검 기준으로 간주하지 않습니다.
