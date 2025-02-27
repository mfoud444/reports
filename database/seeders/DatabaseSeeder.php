<?php

namespace Database\Seeders;

use App\Models\AdministrativeArea;
use App\Models\ReportType;
use App\Models\Resource;
use App\Models\PerformanceIndicator;
use App\Models\MaintenanceType;
use App\Models\RequestType;
use App\Models\Department;
use App\Models\TrainingClass;
use App\Models\Establishment;
use App\Models\ExecutingAgency;
use App\Models\MaintenanceRequestingAgency;
use App\Models\Semester;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Insert default values into administrative_areas table
        $administrativeAreas = [
            ['name' => 'الباحة'],
            ['name' => 'الجوف'],
            ['name' => 'الحدود الشمالية'],
            ['name' => 'الرياض'],
            ['name' => 'الشرقية'],
            ['name' => 'القصيم'],
            ['name' => 'المدينة المنورة'],
            ['name' => 'تبوك'],
            ['name' => 'جازان'],
            ['name' => 'حائل'],
            ['name' => 'عسير'],
            ['name' => 'مكة المكرمة'],
            ['name' => 'نجران'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($administrativeAreas as $area) {
            AdministrativeArea::firstOrCreate(['name' => $area['name']], $area);
        }

        // Insert default values into report_types table
        $reportTypes = [
            ['name' => 'achievement', 'state' => true],
            ['name' => 'maintenance', 'state' => true],
            ['name' => 'financial', 'state' => true],
        ];

        foreach ($reportTypes as $reportType) {
            ReportType::firstOrCreate(['name' => $reportType['name']], $reportType);
        }

        // Insert default values into resources table
        $resources = [
            ['name' => 'بشرية فقط'],
            ['name' => 'مادية فقط'],
            ['name' => 'بشرية ومادية'],
            ['name' => 'لا يوجد'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($resources as $resource) {
            Resource::firstOrCreate(['name' => $resource['name']], $resource);
        }

        // Insert default values into performance_indicators table
        $performanceIndicators = [
            ['name' => 'نسبة المدربين المستفيدين من الدورات التدريبية'],
            ['name' => 'نسبة المدرب للمتدرب'],
            ['name' => 'تكلفة المتدرب السنوية (ريال سعودي)'],
            ['name' => 'معدل التخرج حسب الدفعه (%)'],
            ['name' => 'معدل التوظيف خلال 6 شهور من التخرج (%)'],
            ['name' => 'عدد الخريجين (#)'],
            ['name' => 'عدد مذكرات التفاهم والشراكات (#)'],
            ['name' => 'معدل التسرب للمتدربين (%)'],
            ['name' => 'معدل التعثر'],
            ['name' => 'متوسط المعدل التراكمي GPA لمتدربي المنشأة التدريبية'],
            ['name' => 'عدد المتدربين المشاركين في الأعمال التطوعيه والبرامج والفعاليات'],
            ['name' => 'معدل رضا المدربين'],
            ['name' => 'معدل الرضا الكلي للمتدربين'],
            ['name' => 'معدل الرضا الكلي لأصحاب العمل'],
            ['name' => 'نسبة توفر الخدمات للمتدربين (%)'],
            ['name' => 'عدد المبتكرين والأفكار الإبداعية المطروحة من المنسوبين'],
            ['name' => 'معدل «قياس» لمتدربي المنشأة التدريبية (درجة)'],
            ['name' => 'نسبة المتدربين من خريجي الثانوية العامة من المنطقة (%)'],
            ['name' => 'عدد المقبولين'],
            ['name' => 'معدل تطبيق معايير الأمن والسلامة بالمنشأة التدريبية (%)'],
            ['name' => 'نسبة اشغال المقاعد التدريبية'],
            ['name' => 'نسبة المقبولين للمتقدمين'],
            ['name' => 'معدل اشغال المرافق'],
            ['name' => 'متوسط النصاب التدريبي'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($performanceIndicators as $indicator) {
            PerformanceIndicator::firstOrCreate(['name' => $indicator['name']], $indicator);
        }

        // Insert default values into maintenance_types table
        $maintenanceTypes = [
            ['name' => 'صيانة دورية'],
            ['name' => 'صيانة وقائية'],
            ['name' => 'صيانة طارئة'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($maintenanceTypes as $type) {
            MaintenanceType::firstOrCreate(['name' => $type['name']], $type);
        }

        // Insert default values into request_types table
        $requestTypes = [
            ['name' => 'إضاءة'],
            ['name' => 'تكييف'],
            ['name' => 'دهان'],
            ['name' => 'سباكة'],
            ['name' => 'كهرباء'],
            ['name' => 'مصعد'],
            ['name' => 'صيانة أجهزة حاسب آلي'],
            ['name' => 'صيانة أجهزة عرض'],
            ['name' => 'صيانة معمل'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($requestTypes as $requestType) {
            RequestType::firstOrCreate(['name' => $requestType['name']], $requestType);
        }

        // Insert default values into departments table
        $departments = [
            ['name' => 'إدارة الخدمات المساندة'],
            ['name' => 'وحدة الخدمات العامة'],
            ['name' => 'وحدة السلامة والصحة المهنية'],
            ['name' => 'وحدة تقنية المعلومات'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($departments as $department) {
            Department::firstOrCreate(['name' => $department['name']], $department);
        }

        // Insert default values into training_classes table
        $trainingClasses = [
            ['name' => 'إدارة الخدمات المساندة'],
            ['name' => 'وحدة الخدمات العامة'],
            ['name' => 'وحدة السلامة والصحة المهنية'],
            ['name' => 'وحدة تقنية المعلومات'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($trainingClasses as $trainingClass) {
            TrainingClass::firstOrCreate(['name' => $trainingClass['name']], $trainingClass);
        }

        // Insert default values into establishments table
        $establishments = [
            ['name' => 'عمادة الكلية'],
            ['name' => 'وكالة الكلية للجودة'],
            ['name' => 'وكالة الكلية لشؤون المتدربين'],
            ['name' => 'وكالة الكلية لشؤون المدربين'],
            ['name' => 'قسم تقنية الاعمال'],
            ['name' => 'قسم تقنية السياحة والضيافة'],
            ['name' => 'قسم التقنية المدنية والمعمارية'],
            ['name' => 'قسم التقنية الكهربائية'],
            ['name' => 'قسم التقنية الميكانيكية'],
            ['name' => 'قسم تقنية البيئة'],
            ['name' => 'قسم الدراسات العامة'],
            ['name' => 'قسم التنسيق الوظيفي'],
            ['name' => 'قسم القبول والتسجيل'],
            ['name' => 'قسم التدرب الإلكتروني'],
            ['name' => 'وحدة الإتصال المؤسسي'],
            ['name' => 'وحدة التدريب التعاوني'],
            ['name' => 'وحدة التوجيه والإرشاد'],
            ['name' => 'وحدة تقنية المعلومات'],
            ['name' => 'وحدة صندوق المتدربين'],
            ['name' => 'وحدة السلامة والصحة المهنية'],
            ['name' => 'وحدة النشاط'],
            ['name' => 'مركز الموهبة والابتكار'],
            ['name' => 'مركز الأعمال وخدمة المجتمع'],
            ['name' => 'العيادة الطبية'],
            ['name' => 'المستودع'],
            ['name' => 'مطعم الكلية'],
            ['name' => 'مكتبة الكلية'],
            ['name' => 'القرطاسية'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($establishments as $establishment) {
            Establishment::firstOrCreate(['name' => $establishment['name']], $establishment);
        }

        // Insert default values into executing_agencies table
        $executingAgencies = [
            ['name' => 'عمادة الكلية'],
            ['name' => 'وكالة الكلية للجودة'],
            ['name' => 'وكالة الكلية لشؤون المتدربين'],
            ['name' => 'وكالة الكلية لشؤون المدربين'],
            ['name' => 'قسم تقنية الاعمال'],
            ['name' => 'قسم تقنية السياحة والضيافة'],
            ['name' => 'قسم التقنية المدنية والمعمارية'],
            ['name' => 'قسم التقنية الكهربائية'],
            ['name' => 'قسم التقنية الميكانيكية'],
            ['name' => 'قسم تقنية البيئة'],
            ['name' => 'قسم الدراسات العامة'],
            ['name' => 'قسم التنسيق الوظيفي'],
            ['name' => 'قسم القبول والتسجيل'],
            ['name' => 'قسم التدرب الإلكتروني'],
            ['name' => 'وحدة الإتصال المؤسسي'],
            ['name' => 'وحدة التدريب التعاوني'],
            ['name' => 'وحدة التوجيه والإرشاد'],
            ['name' => 'وحدة تقنية المعلومات'],
            ['name' => 'وحدة صندوق المتدربين'],
            ['name' => 'وحدة السلامة والصحة المهنية'],
            ['name' => 'وحدة النشاط'],
            ['name' => 'مركز الموهبة والابتكار'],
            ['name' => 'مركز الأعمال وخدمة المجتمع'],
            ['name' => 'إدارة الخدمات المساندة'],
            ['name' => 'العيادة الطبية'],
            ['name' => 'المستودع'],
            ['name' => 'مطعم الكلية'],
            ['name' => 'مكتبة الكلية'],
            ['name' => 'القرطاسية'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($executingAgencies as $agency) {
            ExecutingAgency::firstOrCreate(['name' => $agency['name']], $agency);
        }

        // Insert default values into maintenance_requesting_agencies table
        $maintenanceRequestingAgencies = [
            ['name' => 'عمادة الكلية'],
            ['name' => 'وكالة الكلية للجودة'],
            ['name' => 'وكالة الكلية لشؤون المتدربين'],
            ['name' => 'وكالة الكلية لشؤون المدربين'],
            ['name' => 'قسم تقنية الاعمال'],
            ['name' => 'قسم تقنية السياحة والضيافة'],
            ['name' => 'قسم التقنية المدنية والمعمارية'],
            ['name' => 'قسم التقنية الكهربائية'],
            ['name' => 'قسم التقنية الميكانيكية'],
            ['name' => 'قسم تقنية البيئة'],
            ['name' => 'قسم الدراسات العامة'],
            ['name' => 'قسم التنسيق الوظيفي'],
            ['name' => 'قسم القبول والتسجيل'],
            ['name' => 'قسم التدرب الإلكتروني'],
            ['name' => 'وحدة الإتصال المؤسسي'],
            ['name' => 'وحدة التدريب التعاوني'],
            ['name' => 'وحدة التوجيه والإرشاد'],
            ['name' => 'وحدة تقنية المعلومات'],
            ['name' => 'وحدة صندوق المتدربين'],
            ['name' => 'وحدة السلامة والصحة المهنية'],
            ['name' => 'وحدة النشاط'],
            ['name' => 'مركز الموهبة والابتكار'],
            ['name' => 'مركز الأعمال وخدمة المجتمع'],
            ['name' => 'إدارة الخدمات المساندة'],
            ['name' => 'العيادة الطبية'],
            ['name' => 'المستودع'],
            ['name' => 'مطعم الكلية'],
            ['name' => 'مكتبة الكلية'],
            ['name' => 'القرطاسية'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($maintenanceRequestingAgencies as $agency) {
            MaintenanceRequestingAgency::firstOrCreate(['name' => $agency['name']], $agency);
        }

        // Insert default values into semesters table
        $semesters = [
            ['name' => 'الفصل التدريبي الأول ١٤٤٦'],
            ['name' => 'الفصل التدريبي الثاني ١٤٤٦'],
            ['name' => 'الفصل التدريبي الصيفي ١٤٤٦'],
            ['name' => 'الفصل التدريبي الأول ١٤٤٧'],
            ['name' => 'الفصل التدريبي الثاني ١٤٤٧'],
            ['name' => 'الفصل التدريبي الصيفي ١٤٤٧'],
            ['name' => 'الفصل التدريبي الأول ١٤٤٨'],
            ['name' => 'الفصل التدريبي الثاني ١٤٤٨'],
            ['name' => 'الفصل التدريبي الصيفي ١٤٤٨'],
            ['name' => 'الفصل التدريبي الأول ١٤٤٩'],
            ['name' => 'الفصل التدريبي الثاني ١٤٤٩'],
            ['name' => 'الفصل التدريبي الصيفي ١٤٤٩'],
            ['name' => 'غير ذلك'],
        ];

        foreach ($semesters as $semester) {
            Semester::firstOrCreate(['name' => $semester['name']], $semester);
        }
    }
}