import type { PlanType } from '../data/single-product';

export default function formatPlanTypeName(planType: PlanType) {
	return `${planType.nameFa} (${planType.nameEn})`;
}
