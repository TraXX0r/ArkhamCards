/* eslint-disable */
/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Schema = AllCampaigns | Log;
export type Step =
  | BranchStep
  | EffectsStep
  | InputStep
  | EncounterSetsStep
  | GenericStep
  | ResolutionStep
  | RuleReminderStep
  | StoryStep
  | LocationSetupStep;
export type Condition =
  | CampaignLogCondition
  | CampaignLogCountCondition
  | MathCondition
  | CardCondition
  | CampaignDataCondition
  | CampaignLogSectionExistsCondition
  | ScenarioDataCondition
  | TraumaCondition
  | CheckSuppliesCondition;
export type BoolOption = EffectOption | StepsOption;
export type Effect =
  | StoryStepEffect
  | EarnXpEffect
  | AddCardEffect
  | RemoveCardEffect
  | ReplaceCardEffect
  | TraumaEffect
  | CampaignLogEffect
  | CampaignLogCardsEffect
  | CampaignLogCountEffect
  | CampaignDataEffect
  | ScenarioDataEffect
  | AddRemoveChaosTokenEffect;
export type InvestigatorSelector =
  | "lead_investigator"
  | "all"
  | "any"
  | "choice"
  | "defeated"
  | "not_resigned"
  | "$input_value";
export type CampaignDataEffect =
  | CampaignDataResultEffect
  | CampaignDataDifficultyEffect
  | CampaignDataNextScenarioEffect
  | CampaignDataChooseInvestigatorsEffect;
export type Difficulty = "easy" | "standard" | "hard" | "expert";
export type ScenarioDataEffect =
  | ScenarioDataLeadInvestigatorEffect
  | ScenarioDataInvestigatorStatusEffect
  | ScenarioDataStatusEffect;
export type InvestigatorStatus = "alive" | "resigned" | "physical" | "mental" | "eliminated";
export type ScenarioStatus = "not_started" | "skipped" | "started" | "resolution" | "completed" | "unlocked";
export type ChaosToken =
  | "+1"
  | "0"
  | "-1"
  | "-2"
  | "-3"
  | "-4"
  | "-5"
  | "-6"
  | "-7"
  | "-8"
  | "skull"
  | "cultist"
  | "tablet"
  | "elder_thing"
  | "elder_sign"
  | "auto_fail";
export type NumOption = EffectOption | StepsOption;
export type DefaultOption = StepsOption;
export type Operand = CampaignLogCountOperand | ChaosBagOperand;
export type Option = EffectOption | StepsOption;
export type CampaignDataCondition =
  | CampaignDataDifficultyCondition
  | CampaignDataScenarioCondition
  | CampaignDataChaosBagCondition
  | CampaignDataInvestigatorCondition;
export type BulletType = "none" | "small";
export type Input =
  | CardChoiceInput
  | SuppliesInput
  | UseSuppliesInput
  | InvestigatorChoiceInput
  | ChooseOneInput
  | ChooseManyInput
  | CounterInput
  | InvestigatorCounterInput;
export type CardQuery = CardSearchQuery | CardCodeList;
export type Choice = StepsChoice | EffectsChoice;
export type AllCampaigns = FullCampaign[];
export type Choice1 =
  | CardChoice
  | SuppliesChoice
  | SelectChoice
  | InvestigatorCounterChoice
  | CounterChoice
  | InvestigatorChoice;

export interface FullCampaign {
  campaign: Campaign;
  scenarios: Scenario[];
}
export interface Campaign {
  id: string;
  name: string;
  position: number;
  campaign_log: {
    id: string;
    title: string;
    type?: "count" | "supplies" | "hidden";
  }[];
  scenarios: string[];
  setup: string[];
  steps: Step[];
}
export interface BranchStep {
  id: string;
  type: "branch";
  text?: string;
  condition: Condition;
  bullet_type?: BulletType;
}
export interface CampaignLogCondition {
  type: "campaign_log";
  section: string;
  id: string;
  options: BoolOption[];
}
export interface EffectOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  effects: Effect[];
  steps?: null;
}
export interface StoryStepEffect {
  type: "story_step";
  steps: string[];
}
export interface EarnXpEffect {
  type: "earn_xp";
  investigator: InvestigatorSelector;
  bonus?: number;
}
export interface AddCardEffect {
  type: "add_card";
  investigator: InvestigatorSelector;
  card: string;
  required?: boolean;
  weakness_traits?: string[];
  ignore_deck_limit?: boolean;
}
export interface RemoveCardEffect {
  type: "remove_card";
  investigator?: "choice" | "$input_value";
  card: string;
}
export interface ReplaceCardEffect {
  type: "replace_card";
  old_card: string;
  new_card: string;
}
export interface TraumaEffect {
  type: "trauma";
  investigator: "all" | "lead_investigator" | "defeated" | "not_resigned" | "$input_value";
  mental?: number;
  physical?: number;
  mental_or_physical?: number;
  killed?: boolean;
  insane?: boolean;
}
export interface CampaignLogEffect {
  type: "campaign_log";
  section: string;
  id: string;
  text?: string;
  cross_out?: boolean;
}
export interface CampaignLogCardsEffect {
  type: "campaign_log_cards";
  section: string;
  id?: string;
  text?: string;
  cards?: "$lead_investigator" | "$input_value";
  cross_out?: boolean;
}
export interface CampaignLogCountEffect {
  type: "campaign_log_count";
  section: string;
  investigator?: string;
  id?: string;
  operation: "set_input" | "set" | "add_input" | "add";
  value?: number;
  text?: string;
}
export interface CampaignDataResultEffect {
  type: "campaign_data";
  setting: "result";
  value: "win" | "lose";
}
export interface CampaignDataDifficultyEffect {
  type: "campaign_data";
  setting: "difficulty";
  value: Difficulty;
}
export interface CampaignDataNextScenarioEffect {
  type: "campaign_data";
  setting: "next_scenario" | "skip_scenario" | "replay_scenario";
  scenario: string;
}
export interface CampaignDataChooseInvestigatorsEffect {
  type: "campaign_data";
  setting: "choose_investigators";
}
export interface ScenarioDataLeadInvestigatorEffect {
  type: "scenario_data";
  setting: "lead_investigator";
  investigator: "$input_value";
}
export interface ScenarioDataInvestigatorStatusEffect {
  type: "scenario_data";
  setting: "investigator_status";
  investigator: "$input_value";
  investigator_status: InvestigatorStatus;
}
export interface ScenarioDataStatusEffect {
  type: "scenario_data";
  setting: "scenario_status";
  status: ScenarioStatus;
  resolution?: string;
}
export interface AddRemoveChaosTokenEffect {
  type: "add_chaos_token" | "remove_chaos_token";
  tokens: ChaosToken[];
}
export interface StepsOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  steps: string[];
  reason?: string;
  effects?: null;
}
export interface CampaignLogCountCondition {
  type: "campaign_log_count";
  section: string;
  id: string;
  options: NumOption[];
  max?: number;
  defaultOption: DefaultOption;
}
export interface MathCondition {
  type: "math";
  opA: Operand;
  opB: Operand;
  operation: "compare" | "sum";
  options: NumOption[];
  defaultOption: DefaultOption;
}
export interface CampaignLogCountOperand {
  type: "campaign_log_count";
  section: string;
}
export interface ChaosBagOperand {
  type: "chaos_bag";
  token: ChaosToken;
}
export interface CardCondition {
  type: "has_card";
  investigator: "defeated" | "any";
  card: string;
  options: Option[];
}
export interface CampaignDataDifficultyCondition {
  type: "campaign_data";
  campaign_data: "difficulty";
  options: Option[];
}
export interface CampaignDataScenarioCondition {
  type: "campaign_data";
  campaign_data: "scenario_completed";
  scenario: string;
  options: StepsOption[];
}
export interface CampaignDataChaosBagCondition {
  type: "campaign_data";
  campaign_data: "chaos_bag";
  token: ChaosToken;
  options: StepsOption[];
}
export interface CampaignDataInvestigatorCondition {
  type: "campaign_data";
  campaign_data: "investigator";
  investigator_data: "trait" | "faction";
  options: StepsOption[];
}
export interface CampaignLogSectionExistsCondition {
  type: "campaign_log_section_exists";
  section: string;
  options: BoolOption[];
}
export interface ScenarioDataCondition {
  type: "scenario_data";
  scenario_data: "player_count" | "investigator" | "investigator_status";
  investigator?: InvestigatorSelector;
  options: Option[];
}
export interface TraumaCondition {
  type: "trauma";
  investigator: "lead_investigator" | "all";
  trauma: "killed";
  options: StepsOption[];
}
export interface CheckSuppliesCondition {
  type: "check_supplies";
  investigator: "any" | "all" | "choice";
  id: string;
  options: BoolOption[];
}
export interface EffectsStep {
  id: string;
  type: "effects";
  text?: null;
  effectsWithInput: EffectsWithInput[];
  stepText: boolean;
  bullet_type?: BulletType;
}
export interface EffectsWithInput {
  effects: Effect[];
  input?: string[];
  counterInput?: number;
}
export interface InputStep {
  id: string;
  type: "input";
  title?: string;
  text?: string;
  input: Input;
  bullet_type?: BulletType;
}
export interface CardChoiceInput {
  type: "card_choice";
  query: CardQuery[];
  choices: SimpleEffectsChoice[];
}
export interface CardSearchQuery {
  source: "scenario" | "deck";
  trait?: string;
  unique?: boolean;
  vengeance?: boolean;
  code?: null;
}
export interface CardCodeList {
  code: string[];
}
export interface SimpleEffectsChoice {
  flavor?: string;
  text: string;
  description?: string;
  effects: (CampaignLogCardsEffect | RemoveCardEffect)[];
  steps?: null;
}
export interface SuppliesInput {
  type: "supplies";
  points: number[];
  supplies: Supply[];
  section: string;
}
export interface Supply {
  id: string;
  name: string;
  description: string;
  cost: number;
  multiple?: boolean;
}
export interface UseSuppliesInput {
  type: "use_supplies";
  supply: string;
  investigator: "all" | "any" | "choice";
  choices: Option[];
}
export interface InvestigatorChoiceInput {
  type: "investigator_choice";
  investigator: "all" | "choice" | "any";
  detailed?: boolean;
  choices: EffectsChoice[];
}
export interface EffectsChoice {
  flavor?: string;
  text: string;
  description?: string;
  effects: Effect[];
  steps?: null;
}
export interface ChooseOneInput {
  type: "choose_one";
  style?: "picker";
  choices: Choice[];
}
export interface StepsChoice {
  text?: string;
  flavor?: string;
  description?: string;
  steps: string[];
  effects?: null;
}
export interface ChooseManyInput {
  type: "choose_many";
  choices: Choice[];
  count: number;
  progressive?: boolean;
}
export interface CounterInput {
  type: "counter";
  text: string;
  effects: Effect[];
}
export interface InvestigatorCounterInput {
  type: "investigator_counter";
  text: string;
  effects: Effect[];
}
export interface EncounterSetsStep {
  id: string;
  type: "encounter_sets";
  text?: string;
  subtext?: string;
  aside?: boolean;
  encounter_sets: string[];
  bullet_type?: BulletType;
}
export interface GenericStep {
  id: string;
  type?: null;
  title?: string;
  text?: string;
  steps?: string[];
  effects?: Effect[];
  bullets?: {
    text: string;
  }[];
  bullet_type?: BulletType;
}
export interface ResolutionStep {
  id: string;
  type: "resolution";
  resolution: string;
  text?: null;
  generated?: boolean;
  effects?: ScenarioDataStatusEffect[];
  bullet_type?: null;
}
export interface RuleReminderStep {
  id: string;
  type: "rule_reminder";
  text: string;
  title?: string;
  bullets?: {
    text: string;
  }[];
  example?: string;
  bullet_type?: null;
}
export interface StoryStep {
  id: string;
  type: "story";
  title?: string;
  text: string;
  bullets?: {
    text: string;
  }[];
  bullet_type?: null;
}
export interface LocationSetupStep {
  id: string;
  type: "location_setup";
  text?: null;
  title: string;
  locations: string[][];
  bullet_type?: null;
}
export interface Scenario {
  id: string;
  scenarioName: string;
  setup: string[];
  resolutions?: Resolution[];
  steps: Step[];
  interlude?: boolean;
}
export interface Resolution {
  id: string;
  title: string;
  text?: string;
  steps: string[];
}
export interface Log {
  campaignName: string;
  campaignCode: string;
  log: LogEntry[];
}
export interface LogEntry {
  id: string;
  choice?: Choice1;
}
export interface CardChoice {
  cards: string[];
}
export interface SuppliesChoice {
  supplies: {
    investigator: string;
    supplies: string[];
  }[];
}
export interface SelectChoice {
  choices: string[];
}
export interface InvestigatorCounterChoice {
  counts: {
    investigator: string;
    count?: number;
  }[];
}
export interface CounterChoice {
  count: number;
}
export interface InvestigatorChoice {
  investigators?: {
    investigator: string;
    deck?: string;
  }[];
}
