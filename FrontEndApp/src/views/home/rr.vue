
<script lang="ts" setup>
let currentStep = 0;
let reportType = "";
let steps: any[] = [];
var reportData = {};

const stepsContent = {
  achievement: [
    {
      title: "عام",
      content: `
            <div class="formbold-input-flex">
              <div>
                <label for="semester" class="formbold-form-label">الفصل التدريبي</label>
                <select id="semester" name="semester" class="formbold-form-input" required>
                    <option value="الفصل التدريبي الأول ١٤٤٦">الفصل التدريبي الأول ١٤٤٦</option>
                    <option value="الفصل التدريبي الثاني ١٤٤٦">الفصل التدريبي الثاني ١٤٤٦</option>
                    <option value="الفصل التدريبي الصيفي ١٤٤٦">الفصل التدريبي الصيفي ١٤٤٦</option>
                    <option value="الفصل التدريبي الأول ١٤٤٧">الفصل التدريبي الأول ١٤٤٧</option>
                    <option value="الفصل التدريبي الثاني ١٤٤٧">الفصل التدريبي الثاني ١٤٤٧</option>
                    <option value="الفصل التدريبي الصيفي ١٤٤٧">الفصل التدريبي الصيفي ١٤٤٧</option>
                    <option value="الفصل التدريبي الأول ١٤٤٨">الفصل التدريبي الأول ١٤٤٨</option>
                    <option value="الفصل التدريبي الثاني ١٤٤٨">الفصل التدريبي الثاني ١٤٤٨</option>
                    <option value="الفصل التدريبي الصيفي ١٤٤٨">الفصل التدريبي الصيفي ١٤٤٨</option>
                    <option value="الفصل التدريبي الأول ١٤٤٩">الفصل التدريبي الأول ١٤٤٩</option>
                    <option value="الفصل التدريبي الثاني ١٤٤٩">الفصل التدريبي الثاني ١٤٤٩</option>
                    <option value="الفصل التدريبي الصيفي ١٤٤٩">الفصل التدريبي الصيفي ١٤٤٩</option>
                </select>
                </div>
                  <div>
                  <label for="executionDate" class="formbold-form-label">تاريخ التنفيذ</label>
                  <input type="date" name="executionDate" id="executionDate" class="formbold-form-input" required />
                </div>
    
            </div>
            <div>
                      <label for="institution" class="formbold-form-label">الجهة المنفذة:</label>
                      <div id="otherInstitution-container">
                        <select id="institution" name="institution" class="formbold-form-input" onchange="handleSelectInput('institution', 'otherInstitution', 'resetInstitution')" required>
                          <option value="عمادة الكلية">عمادة الكلية</option>
                          <option value="وكالة الكلية للجودة">وكالة الكلية للجودة</option>
                          <option value="وكالة الكلية لشؤون المتدربين">وكالة الكلية لشؤون المتدربين</option>
                          <option value="وكالة الكلية لشؤون المدربين">وكالة الكلية لشؤون المدربين</option>
                          <option value="قسم تقنية الاعمال">قسم تقنية الاعمال</option>
                          <option value="قسم تقنية السياحة والضيافة">قسم تقنية السياحة والضيافة</option>
                          <option value="قسم التقنية المدنية والمعمارية">قسم التقنية المدنية والمعمارية</option>
                          <option value="قسم التقنية الكهربائية">قسم التقنية الكهربائية</option>
                          <option value="قسم التقنية الميكانيكية">قسم التقنية الميكانيكية</option>
                          <option value="قسم تقنية البيئة">قسم تقنية البيئة</option>
                          <option value="قسم الدراسات العامة">قسم الدراسات العامة</option>
                          <option value="قسم التنسيق الوظيفي">قسم التنسيق الوظيفي</option>
                          <option value="قسم القبول والتسجيل">قسم القبول والتسجيل</option>
                          <option value="قسم التدرب الإلكتروني">قسم التدرب الإلكتروني</option>
                          <option value="وحدة الإتصال المؤسسي">وحدة الإتصال المؤسسي</option>
                          <option value="وحدة التدريب التعاوني">وحدة التدريب التعاوني</option>
                          <option value="وحدة التوجيه والإرشاد">وحدة التوجيه والإرشاد</option>
                          <option value="وحدة تقنية المعلومات">وحدة تقنية المعلومات</option>
                          <option value="وحدة صندوق المتدربين">وحدة صندوق المتدربين</option>
                          <option value="وحدة السلامة والصحة المهنية">وحدة السلامة والصحة المهنية</option>
                          <option value="وحدة النشاط">وحدة النشاط</option>
                          <option value="مركز الموهبة والابتكار">مركز الموهبة والابتكار</option>
                          <option value="مركز الأعمال وخدمة المجتمع">مركز الأعمال وخدمة المجتمع</option>
                          <option value="إدارة الخدمات المساندة">إدارة الخدمات المساندة</option>
                          <option value="العيادة الطبية">العيادة الطبية</option>
                          <option value="المستودع">المستودع</option>
                          <option value="مطعم الكلية">مطعم الكلية</option>
                          <option value="مكتبة الكلية">مكتبة الكلية</option>
                          <option value="القرطاسية">القرطاسية</option>
                          <option value="other">غير ذلك</option>
                        </select>
                        <div class="btn-reset" id="otherInstitution-container"></div>
                      </div>
                    </div>
            <div>
              <label for="topic" class="formbold-form-label">موضوع التقرير</label>
              <input type="text"
autocomplete="off" name="topic" id="topic" class="formbold-form-input" maxlength="85" required />
            </div>

            <div>
              <label for="supervisor" class="formbold-form-label">مسؤول التنفيذ الرئيسي</label>
              <input type="text"
autocomplete="off" name="supervisor" id="supervisor" class="formbold-form-input" maxlength="40" required />
            </div>


            <div>
              <label for="resources" class="formbold-form-label">الموارد المستخدمة</label>
              <div id="otherResources-container">
               <select id="resources" name="resources" class="formbold-form-input" onchange="handleResourcesSelectInput('resources', 'otherResources', 'resetResources')" required>
                <option value="بشرية فقط">بشرية فقط</option>
                <option value="مادية فقط">مادية فقط</option>
                <option value="بشرية ومادية">بشرية ومادية</option>
                <option value="لا يوجد">لا يوجد</option>
                <option value="other">غير ذلك</option>
              </select>
              <div class="btn-reset" id="otherResources-container"></div>
               </div>
            </div>

                            `,
    },
    {
      title: "التنفيذ",
      content: `
            <div>
              <label for="operationalGoal" class="formbold-form-label">الهدف العام</label>
              <textarea rows="3" name="operationalGoal" id="operationalGoal" class="formbold-form-input" maxlength="280" required dir="rtl"></textarea>
            </div>

            <div>
              <label for="executionProcedures" class="formbold-form-label">إجراءات التنفيذ</label>
              <textarea rows="3" name="executionProcedures" id="executionProcedures" class="formbold-form-input" maxlength="280" required dir="rtl"></textarea>
            </div>

            <div>
              <label for="challenges" class="formbold-form-label">التحديات</label>
              <textarea rows="3" name="challenges" id="challenges" class="formbold-form-input" maxlength="280" required dir="rtl"></textarea>
            </div>

            <div>
              <label for="recommendations" class="formbold-form-label">التوصيات</label>
              <textarea rows="3" name="recommendations" id="recommendations" class="formbold-form-input" maxlength="280" required dir="rtl"></textarea>
            </div>
              `,
    },
    {
      title: "التوثيق",
      content: `
                  <label>صورة:</label>
                  <div class="documentation-container">
                    <div class="file-upload">
                      <input type="file" id="documentation1" name="documentation1" accept="image/*" />
                      <div class="preview" id="preview1"></div>
                      <span class="hover-text">ارفع الصورة هنا</span>
                    </div>
                    <div class="file-upload">
                      <input type="file" id="documentation2" name="documentation2" accept="image/*" />
                      <div class="preview" id="preview2"></div>
                      <span class="hover-text">ارفع الصورة هنا</span>
                    </div>
                    <div class="file-upload">
                      <input type="file" id="documentation3" name="documentation3" accept="image/*" />
                      <div class="preview" id="preview3"></div>
                      <span class="hover-text">ارفع الصورة هنا</span>
                    </div>
                  </div>

                  <div>
                    <label for="documentation4" class="formbold-form-label">رابط</label>
                    <input type="text"
autocomplete="off" name="documentation4" id="documentation4" class="formbold-form-input" />
                  </div>
                 `,
    },
    {
      title: "الأداء",
      content: `
                     <div>
                        <label for="performanceIndicator" class="formbold-form-label">مؤشر الأداء</label>
                        <div id="otherPerformanceIndicator-container">
                          <select id="performanceIndicator" name="performanceIndicator" class="formbold-form-input" onchange="handlePerformanceIndicatorSelect('performanceIndicator', 'otherPerformanceIndicator', 'resetPerformanceIndicator')">
                            <option value="نسبة المدربين المستفيدين من الدورات التدريبية">نسبة المدربين المستفيدين من الدورات التدريبية</option>
                            <option value="نسبة المدرب للمتدرب">نسبة المدرب للمتدرب</option>
                            <option value="تكلفة المتدرب السنوية (ريال سعودي)">تكلفة المتدرب السنوية (ريال سعودي)</option>
                            <option value="معدل التخرج حسب الدفعه (%)">معدل التخرج حسب الدفعه (%)</option>
                            <option value="معدل التوظيف خلال 6 شهور من التخرج (%) ">معدل التوظيف خلال 6 شهور من التخرج (%) </option>
                            <option value="عدد الخريجين (#)">عدد الخريجين (#)</option>
                            <option value="عدد مذكرات التفاهم والشراكات  (#)">عدد مذكرات التفاهم والشراكات (#)</option>
                            <option value="معدل التسرب للمتدربين (%)">معدل التسرب للمتدربين (%)</option>
                            <option value="معدل التعثر">معدل التعثر</option>
                            <option value="متوسط المعدل التراكمي GPA لمتدربي المنشأة التدريبية">متوسط المعدل التراكمي GPA لمتدربي المنشأة التدريبية</option>
                            <option value="عدد المتدربين المشاركين في الأعمال التطوعيه والبرامج والفعاليات">عدد المتدربين المشاركين في الأعمال التطوعيه والبرامج والفعاليات</option>
                            <option value="معدل رضا المدربين">معدل رضا المدربين</option>
                            <option value="معدل الرضا الكلي للمتدربين">معدل الرضا الكلي للمتدربين</option>
                            <option value="معدل الرضا الكلي لأصحاب العمل">معدل الرضا الكلي لأصحاب العمل</option>
                            <option value="نسبة توفر الخدمات للمتدربين (%)">نسبة توفر الخدمات للمتدربين (%)</option>
                            <option value="عدد المبتكرين والأفكار الإبداعية المطروحة من المنسوبين">عدد المبتكرين والأفكار الإبداعية المطروحة من المنسوبين</option>
                            <option value="معدل «قياس» لمتدربي المنشأة التدريبية (درجة)">معدل «قياس» لمتدربي المنشأة التدريبية (درجة)</option>
                            <option value="نسبة المتدربين من خريجي الثانوية العامة من المنطقة (%)">نسبة المتدربين من خريجي الثانوية العامة من المنطقة (%)</option>
                            <option value="عدد المقبولين">عدد المقبولين</option>
                            <option value="معدل تطبيق معايير الأمن والسلامة بالمنشأة التدريبية (%)">معدل تطبيق معايير الأمن والسلامة بالمنشأة التدريبية (%)</option>
                            <option value="نسبة اشغال  المقاعد التدريبية">نسبة اشغال المقاعد التدريبية</option>
                            <option value="نسبة المقبولين للمتقدمين">نسبة المقبولين للمتقدمين</option>
                            <option value="معدل اشغال المرافق">معدل اشغال المرافق</option>
                            <option value="متوسط النصاب التدريبي">متوسط النصاب التدريبي</option>
                            <option value="other">غير ذلك</option>
                          </select>
                          <div class="btn-reset" id="otherPerformanceIndicator-container"></div>
                        </div>
                      </div>

                      <div class="formbold-input-flex">
                        <div><label for="target" class="formbold-form-label"> المستهدف </label><input name="target" id="target" placeholder="0" type="text"
autocomplete="off" maxlength="10" class="formbold-form-input" required oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, this.maxLength);" /></div>
                        <div><label for="achieved" class="formbold-form-label"> المتحقق </label><input name="achieved" id="achieved" placeholder="0" type="text"
autocomplete="off" maxlength="10" class="formbold-form-input" required oninput="this.value = this.value.replace(/[^0-9]/g, '').slice(0, this.maxLength);" /></div>
                        <div style="display: none"><input type="text"
autocomplete="off" id="percentage" name="percentage" readonly /></div>
                      </div>

                             `,
    },
    {
      title: "الاعتماد",
      content: `
                               <div class="formbold-input-flex">
                      <div style="width: 80%;">
                        <div>
                          <label for="reporter" class="formbold-form-label">
                           معد التقرير
                          </label>
                          <input
                            type="text"
autocomplete="off"
                            name="reporter"
                            id="reporter"
                            class="formbold-form-input"
                            maxlength="45"
                            required
                          />
                        </div>
                        <div>
                          <label for="reportDate" class="formbold-form-label">
                            تاريخ التقرير
                          </label>
                          <input
                            type="date"
                            name="reportDate"
                            id="reportDate"
                            class="formbold-form-input"
                            required
                          />
                        </div>
                        <div>
                          <label for="approver" class="formbold-form-label">
                            اعتماد المسؤول
                          </label>
                          <input
                            type="text"
                            autocomplete="off"
                            name="approver"
                            id="approver"
                            class="formbold-form-input"
                            maxlength="45"
                            required
                          />
                        </div>
                      
                      </div>
                      <div style="    display: flex;
            width: 20%;
            align-items: center;
            flex-direction: column;
            justify-content: center;">
                        <label for="stamp">ارفع صورة الختم:</label>
                        <div class="file-upload">
                          <input
                            type="file"
                            id="stamp"
                            name="stamp"
                            accept="image/*"

                          />
                          <div class="preview" id="stampPreview"></div>
                          <span class="hover-text">ارفع صورة الختم هنا</span>
                        </div>
                      </div>
                    </div>
                    `,
    },
  ],
  financial: [
    {
      title: "عام",
      content: `
                    <div class="formbold-input-flex">
                        <div>
                          <label for="semester" class="formbold-form-label">الفصل التدريبي</label>
                          <select id="semester" name="semester" class="formbold-form-input" required >
                            <option value="الفصل التدريبي الأول ١٤٤٦">الفصل التدريبي الأول ١٤٤٦</option>
                            <option value="الفصل التدريبي الثاني ١٤٤٦">الفصل التدريبي الثاني ١٤٤٦</option>
                            <option value="الفصل التدريبي الصيفي ١٤٤٦">الفصل التدريبي الصيفي ١٤٤٦</option>
                            <option value="الفصل التدريبي الأول ١٤٤٧">الفصل التدريبي الأول ١٤٤٧</option>
                            <option value="الفصل التدريبي الثاني ١٤٤٧">الفصل التدريبي الثاني ١٤٤٧</option>
                            <option value="الفصل التدريبي الصيفي ١٤٤٧">الفصل التدريبي الصيفي ١٤٤٧</option>
                            <option value="الفصل التدريبي الأول ١٤٤٨">الفصل التدريبي الأول ١٤٤٨</option>
                            <option value="الفصل التدريبي الثاني ١٤٤٨">الفصل التدريبي الثاني ١٤٤٨</option>
                            <option value="الفصل التدريبي الصيفي ١٤٤٨">الفصل التدريبي الصيفي ١٤٤٨</option>
                            <option value="الفصل التدريبي الأول ١٤٤٩">الفصل التدريبي الأول ١٤٤٩</option>
                            <option value="الفصل التدريبي الثاني ١٤٤٩">الفصل التدريبي الثاني ١٤٤٩</option>
                            <option value="الفصل التدريبي الصيفي ١٤٤٩">الفصل التدريبي الصيفي ١٤٤٩</option>
                          </select>
                        </div>

                     <div>
                      <label for="institution" class="formbold-form-label">الجهة المنفذة:</label>
                      <div id="otherInstitution-container">
                        <select id="institution" name="institution" class="formbold-form-input" onchange="handleSelectInput('institution', 'otherInstitution', 'resetInstitution')" required>
                          <option value="عمادة الكلية">عمادة الكلية</option>
                          <option value="وكالة الكلية للجودة">وكالة الكلية للجودة</option>
                          <option value="وكالة الكلية لشؤون المتدربين">وكالة الكلية لشؤون المتدربين</option>
                          <option value="وكالة الكلية لشؤون المدربين">وكالة الكلية لشؤون المدربين</option>
                          <option value="قسم تقنية الاعمال">قسم تقنية الاعمال</option>
                          <option value="قسم تقنية السياحة والضيافة">قسم تقنية السياحة والضيافة</option>
                          <option value="قسم التقنية المدنية والمعمارية">قسم التقنية المدنية والمعمارية</option>
                          <option value="قسم التقنية الكهربائية">قسم التقنية الكهربائية</option>
                          <option value="قسم التقنية الميكانيكية">قسم التقنية الميكانيكية</option>
                          <option value="قسم تقنية البيئة">قسم تقنية البيئة</option>
                          <option value="قسم الدراسات العامة">قسم الدراسات العامة</option>
                          <option value="قسم التنسيق الوظيفي">قسم التنسيق الوظيفي</option>
                          <option value="قسم القبول والتسجيل">قسم القبول والتسجيل</option>
                          <option value="قسم التدرب الإلكتروني">قسم التدرب الإلكتروني</option>
                          <option value="وحدة الإتصال المؤسسي">وحدة الإتصال المؤسسي</option>
                          <option value="وحدة التدريب التعاوني">وحدة التدريب التعاوني</option>
                          <option value="وحدة التوجيه والإرشاد">وحدة التوجيه والإرشاد</option>
                          <option value="وحدة تقنية المعلومات">وحدة تقنية المعلومات</option>
                          <option value="وحدة صندوق المتدربين">وحدة صندوق المتدربين</option>
                          <option value="وحدة السلامة والصحة المهنية">وحدة السلامة والصحة المهنية</option>
                          <option value="وحدة النشاط">وحدة النشاط</option>
                          <option value="مركز الموهبة والابتكار">مركز الموهبة والابتكار</option>
                          <option value="مركز الأعمال وخدمة المجتمع">مركز الأعمال وخدمة المجتمع</option>
                          <option value="إدارة الخدمات المساندة">إدارة الخدمات المساندة</option>
                          <option value="العيادة الطبية">العيادة الطبية</option>
                          <option value="المستودع">المستودع</option>
                          <option value="مطعم الكلية">مطعم الكلية</option>
                          <option value="مكتبة الكلية">مكتبة الكلية</option>
                          <option value="القرطاسية">القرطاسية</option>
                          <option value="other">غير ذلك</option>
                        </select>
                        <div class="btn-reset" id="otherInstitution-container"></div>
                      </div>
                    </div>

                      </div>
                        <div class="formbold-input-flex">
                        <div>
                          <label for="auditDate" class="formbold-form-label">تاريخ التدقيقة:</label>
                          <input type="date" name="auditDate" id="auditDate" class="formbold-form-input" min="2000-01-01" required />
                        </div>
                        <div>
                          <label for="topic" class="formbold-form-label">موضوع التقرير</label>
                          <input type="text"
autocomplete="off" name="topic" id="topic" class="formbold-form-input" maxlength="100" required />
                        </div>
                      </div>

                      <div>
                        <label for="mainSupervisor" class="formbold-form-label">مسؤول التنفيذ الرئيسي</label>
                        <input type="text"
autocomplete="off" name="mainSupervisor" id="mainSupervisor" class="formbold-form-input" maxlength="36" required />
                      </div>

                      <div>
                        <label for="subSupervisor" class="formbold-form-label">مسؤول التنفيذ الفرعي</label>
                        <input type="text"
autocomplete="off" name="subSupervisor" id="subSupervisor" class="formbold-form-input" maxlength="36" required />
                      </div>

                            `,
    },
    {
      title: "الهدف العام",
      content: `
                    <div>
                      <label for="generalGoal" class="formbold-form-label">الهدف العام</label>
                      <textarea rows="3" name="generalGoal" id="generalGoal" class="formbold-form-input" maxlength="280" required></textarea>
                    </div> `,
    },
    {
      title: "الإيرادات والمصروفات",
      content: `
               <table id="financialTable" name="financialTable">
                  <thead>
                    <tr class="table-head">
                      <th>#</th>
                      <th>نوع الإيراد</th>
                      <th>مبلغ الإيراد</th>
                      <th>المبلغ المصروف</th>
                      <th>المبلغ المتبقي</th>
                      <th>النسبة المئوية</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${[...Array(8).keys()]
                      .map(
                        (i) => `
                        <tr>
                          <td><span type="text"
autocomplete="off" name="day${i + 1}">${i + 1}</span></td>
                          <td><input type="text"
autocomplete="off" name="revenueType${i + 1}" maxlength="40" /></td>
                          <td><input type="text"
autocomplete="off" style="text-align: center" oninput="this.value = this.value.replace(/[^0-9۰-۹,.]/g, '').slice(0, this.maxLength);" maxlength="10" name="revenueAmount${
  i + 1
}" /></td>
                          <td><input type="text"
autocomplete="off" style="text-align: center" oninput="this.value = this.value.replace(/[^0-9۰-۹,.]/g, '').slice(0, this.maxLength);" maxlength="10" name="expenseAmount${
  i + 1
}" /></td>
                          <td><input type="text"
autocomplete="off" name="remainingAmount${
  i + 1
}" class="remaining-amount" readonly /></td>
                          <td><input type="text"
autocomplete="off" name="percentage${
  i + 1
}" class="percentage" readonly /></td>
                        </tr>`
                      )
                      .join("")}
                  </tbody>
                    <tfoot>
                        <tr>
                          <td colspan="2">الإجمالي</td>
                          <td><input type="text"
autocomplete="off" id="totalRevenue" readonly /></td>
                          <td><input type="text"
autocomplete="off" id="totalExpenses" readonly /></td>
                          <td><input type="text"
autocomplete="off" id="totalRemaining" readonly /></td>
                          <td><input type="text"
autocomplete="off" id="totalPercentage" readonly /></td>
                        </tr>
                    </tfoot>
                </table>

                            `,
    },
    {
      title: "التوصيات",
      content: `
                      <div>
                      <label for="recommendations" class="formbold-form-label">
                       التوصيات
                      </label>
                      <textarea
                        rows="2"
                        name="recommendations"
                        id="recommendations"
                        maxlength="280"
                        class="formbold-form-input"
                        required
                      ></textarea>
                    </div>

                             `,
    },
    {
      title: "الاعتماد",
      content: `
                               <div class="formbold-input-flex">
                      <div style="width: 80%;">
                        <div>
                          <label for="reporter" class="formbold-form-label">
                           اسم المدقق
                          </label>
                          <input
                            type="text"
autocomplete="off"
                            name="reporter"
                            maxlength="45"
                            id="reporter"
                            class="formbold-form-input"
                            required
                          />
                        </div>
                        <div>
                          <label for="reportDate" class="formbold-form-label">
                            تاريخ التقرير
                          </label>
                          <input
                            type="date"
                            name="reportDate"

                            id="reportDate"
                            class="formbold-form-input"
                            required
                          />
                        </div>
                        <div>
                          <label for="approver" class="formbold-form-label">
                            اعتماد المسؤول
                          </label>
                          <input
                            type="text"
autocomplete="off"
                            name="approver"
                            id="approver"
                            maxlength="45"
                            class="formbold-form-input"
                            required
                          />
                        </div>
                      </div>
                      <div style="    display: flex;
            width: 20%;
            align-items: center;
            flex-direction: column;
            justify-content: center;">
                        <label for="stamp">ارفع صورة الختم:</label>
                        <div class="file-upload">
                          <input
                            type="file"
                            id="stamp"
                            name="stamp"
                            accept="image/*"

                          />
                          <div class="preview" id="stampPreview"></div>

                          <span class="hover-text">ارفع صورة الختم هنا</span>
                        </div>
                      </div>
                    </div>
                    `,
    },
  ],
  maintenance: [
    {
      title: "عام",
      content: `
        <div class="formbold-input-flex">
                        <div>
                          <label for="semester" class="formbold-form-label"
                            >الفصل التدريبي</label
                          >
                          <select
                            id="semester"
                            name="semester"
                            class="formbold-form-input"
                            required
                          >
                              <option value="الفصل التدريبي الأول ١٤٤٦">الفصل التدريبي الأول ١٤٤٦</option>
                              <option value="الفصل التدريبي الثاني ١٤٤٦">الفصل التدريبي الثاني ١٤٤٦</option>
                              <option value="الفصل التدريبي الصيفي ١٤٤٦">الفصل التدريبي الصيفي ١٤٤٦</option>
                              <option value="الفصل التدريبي الأول ١٤٤٧">الفصل التدريبي الأول ١٤٤٧</option>
                              <option value="الفصل التدريبي الثاني ١٤٤٧">الفصل التدريبي الثاني ١٤٤٧</option>
                              <option value="الفصل التدريبي الصيفي ١٤٤٧">الفصل التدريبي الصيفي ١٤٤٧</option>
                              <option value="الفصل التدريبي الأول ١٤٤٨">الفصل التدريبي الأول ١٤٤٨</option>
                              <option value="الفصل التدريبي الثاني ١٤٤٨">الفصل التدريبي الثاني ١٤٤٨</option>
                              <option value="الفصل التدريبي الصيفي ١٤٤٨">الفصل التدريبي الصيفي ١٤٤٨</option>
                              <option value="الفصل التدريبي الأول ١٤٤٩">الفصل التدريبي الأول ١٤٤٩</option>
                              <option value="الفصل التدريبي الثاني ١٤٤٩">الفصل التدريبي الثاني ١٤٤٩</option>
                              <option value="الفصل التدريبي الصيفي ١٤٤٩">الفصل التدريبي الصيفي ١٤٤٩</option>

                          </select>
                        </div>
                     <div>
                          <label for="maintenanceType" class="formbold-form-label"
                            >نوع الصيانة</label
                          >
                          <select
                            id="maintenanceType"
                            name="maintenanceType"
                            class="formbold-form-input"
                            required
                          >
                            <option value="صيانة دورية">
        صيانة دورية
                            </option>
                           <option value="صيانة وقائية">
        صيانة وقائية
                            </option>
                            <option value="صيانة طارئة">
        صيانة طارئة
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="formbold-input-flex">
                        <div>
                          <label for="maintenanceDate" class="formbold-form-label"
                            >تاريخ الصيانة</label
                          >
                          <input
                            type="date"
                            name="maintenanceDate"
                            id="maintenanceDate"
                            class="formbold-form-input"
                            required
                          />
                        </div>
                        <div>
                          <label for="maintenanceTime" class="formbold-form-label"
                            >وقت الصيانة</label
                          >
                          <input
                            type="time"
                            name="maintenanceTime"
                            id="maintenanceTime"
                            class="formbold-form-input"
                            required
                          />
                        </div>
                      </div>
                      <div>
                      <label for="requestType" class="formbold-form-label">نوع الطلب</label>
                      <div id="otherRequestType-container">
                        <select id="requestType" name="requestType" class="formbold-form-input" onchange="handleRequestTypeSelect('requestType', 'otherRequestType', 'resetRequestType')" required>
                              <option value="إضاءة">إضاءة</option>
                              <option value="تكييف">تكييف</option>
                              <option value="دهان">دهان</option>
                              <option value="سباكة">سباكة</option>
                              <option value="كهرباء">كهرباء</option>
                              <option value="مصعد">مصعد</option>
                              <option value="صيانة أجهزة حاسب آلي">صيانة أجهزة حاسب آلي</option>
                              <option value="صيانة أجهزة عرض">صيانة أجهزة عرض</option>
                              <option value="صيانة معمل">صيانة معمل</option>
                              <option value="other">غير ذلك</option>
                        </select>
                        <div class="btn-reset" id="otherRequestType-container"></div>
                      </div>
                    </div>

                      <div>
                        <label for="maintenanceTopic" class="formbold-form-label"
                          >حيثيات الطلب</label
                        >
                        <input
                          type="text"
autocomplete="off"
                          name="maintenanceTopic"
                          id="maintenanceTopic"
                          class="formbold-form-input"
                          required
                          maxlength="100"
                        />
                      </div>
                            <div>
                      <label for="institution" class="formbold-form-label">الجهة الطالبة للصيانة</label>
                      <div id="otherInstitution-container">
                        <select id="institution" name="institution" class="formbold-form-input" onchange="handleSelectInput('institution', 'otherInstitution', 'resetInstitution')" required>
                          <option value="عمادة الكلية">عمادة الكلية</option>
                          <option value="وكالة الكلية للجودة">وكالة الكلية للجودة</option>
                          <option value="وكالة الكلية لشؤون المتدربين">وكالة الكلية لشؤون المتدربين</option>
                          <option value="وكالة الكلية لشؤون المدربين">وكالة الكلية لشؤون المدربين</option>
                          <option value="قسم تقنية الاعمال">قسم تقنية الاعمال</option>
                          <option value="قسم تقنية السياحة والضيافة">قسم تقنية السياحة والضيافة</option>
                          <option value="قسم التقنية المدنية والمعمارية">قسم التقنية المدنية والمعمارية</option>
                          <option value="قسم التقنية الكهربائية">قسم التقنية الكهربائية</option>
                          <option value="قسم التقنية الميكانيكية">قسم التقنية الميكانيكية</option>
                          <option value="قسم تقنية البيئة">قسم تقنية البيئة</option>
                          <option value="قسم الدراسات العامة">قسم الدراسات العامة</option>
                          <option value="قسم التنسيق الوظيفي">قسم التنسيق الوظيفي</option>
                          <option value="قسم القبول والتسجيل">قسم القبول والتسجيل</option>
                          <option value="قسم التدرب الإلكتروني">قسم التدرب الإلكتروني</option>
                          <option value="وحدة الإتصال المؤسسي">وحدة الإتصال المؤسسي</option>
                          <option value="وحدة التدريب التعاوني">وحدة التدريب التعاوني</option>
                          <option value="وحدة التوجيه والإرشاد">وحدة التوجيه والإرشاد</option>
                          <option value="وحدة تقنية المعلومات">وحدة تقنية المعلومات</option>
                          <option value="وحدة صندوق المتدربين">وحدة صندوق المتدربين</option>
                          <option value="وحدة السلامة والصحة المهنية">وحدة السلامة والصحة المهنية</option>
                          <option value="وحدة النشاط">وحدة النشاط</option>
                          <option value="مركز الموهبة والابتكار">مركز الموهبة والابتكار</option>
                          <option value="مركز الأعمال وخدمة المجتمع">مركز الأعمال وخدمة المجتمع</option>
                          <option value="إدارة الخدمات المساندة">إدارة الخدمات المساندة</option>
                          <option value="العيادة الطبية">العيادة الطبية</option>
                          <option value="المستودع">المستودع</option>
                          <option value="مطعم الكلية">مطعم الكلية</option>
                          <option value="مكتبة الكلية">مكتبة الكلية</option>
                          <option value="القرطاسية">القرطاسية</option>
                          <option value="other">غير ذلك</option>
                        </select>
                        <div class="btn-reset" id="otherInstitution-container"></div>
                      </div>
                    </div>
            <div>
                            `,
    },
    {
      title: "التنفيذ",
      content: ` <div>
                        <label for="faultDescription" class="formbold-form-label"
                          >وصف العطل</label
                        >
                        <textarea
                          rows="3"
                          name="faultDescription"
                          id="faultDescription"
                          class="formbold-form-input"
                          required
                          maxlength="280"
                        ></textarea>
                      </div>
                      <div>
                        <label for="executionProcedures" class="formbold-form-label"
                          >إجراءات التنفيذ</label
                        >
                        <textarea
                          rows="3"
                          name="executionProcedures"
                          id="executionProcedures"
                          class="formbold-form-input"
                          required
                          maxlength="280"
                        ></textarea>
                      </div>
                      <div>
                        <label for="challenges" class="formbold-form-label"
                          >التحديات</label
                        >
                        <textarea
                          rows="3"
                          name="challenges"
                          id="challenges"
                          class="formbold-form-input"
                          required
                          maxlength="280"
                        ></textarea>
                      </div>
                      <div>
                        <label for="recommendations" class="formbold-form-label"
                          >التوصيات</label
                        >
                        <textarea
                          rows="3"
                          name="recommendations"
                          id="recommendations"
                          class="formbold-form-input"
                          required
                          maxlength="280"
                        ></textarea>
                      </div>
                                `,
    },
    {
      title: "التوثيق",
      content: `
                     <label>صورة:</label>
                      <div class="documentation-container">
                        <div class="file-upload">
                          <input
                            type="file"
                            id="documentation1"
                            name="documentation1"
                            accept="image/*"
                          />
                          <div class="preview" id="preview1"></div>
                          <span class="hover-text">ارفع الصورة هنا</span>
                        </div>
                        <div class="file-upload">
                          <input
                            type="file"
                            id="documentation2"
                            name="documentation2"
                            accept="image/*"
                          />
                          <div class="preview" id="preview2"></div>
                          <span class="hover-text">ارفع الصورة هنا</span>
                        </div>
                        <div class="file-upload">
                          <input
                            type="file"
                            id="documentation3"
                            name="documentation3"
                            accept="image/*"
                          />
                          <div class="preview" id="preview3"></div>
                          <span class="hover-text">ارفع الصورة هنا</span>
                        </div>
                      </div>
                      <div>
                        <label for="documentation4" class="formbold-form-label">رابط</label>
                        <input
                          type="text"
autocomplete="off"
                          name="documentation4"
                          id="documentation4"
                          class="formbold-form-input"
                        />
                      </div>
                            `,
    },
    {
      title: "الاعتماد",
      content: `
                      <div class="formbold-input-flex">
                      <div style="width: 80%;">
                        <div>
                          <label for="reporter" class="formbold-form-label">
                           معد التقرير
                          </label>
                          <input
                            type="text"
autocomplete="off"
                            name="reporter"
                            id="reporter"
                            class="formbold-form-input"
                            maxlength="45"
                            required
                          />
                        </div>
                        <div>
                          <label for="reportDate" class="formbold-form-label">
                            تاريخ التقرير
                          </label>
                          <input
                            type="date"
                            name="reportDate"
                            placeholder=""
                            id="reportDate"
                            class="formbold-form-input"
                            required
                          />
                        </div>
                        <div>
                          <label for="approver" class="formbold-form-label">
                            اعتماد المسؤول
                          </label>
                          <input type="text"
autocomplete="off" name="approver" id="approver" class="formbold-form-input" maxlength="45" required/>
                        </div>


                        <div>
                          <label for="department" class="formbold-form-label">القسم/الإدارة:</label>
                          <div id="otherDepartment-container">
                            <select id="department" name="department" class="formbold-form-input" onchange="handleDepartmentSelect('department', 'otherDepartment', 'resetDepartment')" required>
                                 <option value="إدارة الخدمات المساندة">إدارة الخدمات المساندة</option>
                                 <option value="وحدة الخدمات العامة">وحدة الخدمات العامة</option>
                                 <option value="وحدة السلامة والصحة المهنية">وحدة السلامة والصحة المهنية</option>
                                 <option value="وحدة تقنية المعلومات">وحدة تقنية المعلومات</option>
                                 <option value="other">غير ذلك</option>
                            </select>
                            <div class="btn-reset" id="otherDepartment-container"></div>
                          </div>
                        </div>

                      </div>
                      <div style="display: flex; width: 20%; align-items: center; flex-direction: column; justify-content: center;">
                        <label for="stamp">ارفع صورة الختم:</label>
                        <div class="file-upload">
                          <input
                            type="file"
                            id="stamp"
                            name="stamp"
                            accept="image/*"

                          />
                          <div class="preview" id="stampPreview"></div>
                          <span class="hover-text">ارفع صورة الختم هنا</span>
                        </div>
                      </div>
                    </div>
                    `,
    },
  ],
};

const dialog = document.getElementById("dialog");
const openDialog = document.getElementById("openDialog");
const closeDialog = document.getElementById("closeDialog");
const sendEmail = document.getElementById("sendEmail");

// openDialog.onclick = function () {
//   dialog.style.display = "block";
// };

// closeDialog.onclick = function () {
//   dialog.style.display = "none";
// };

window.onclick = function (event) {
  if (event.target === dialog) {
    dialog.style.display = "none";
  }
};

sendEmail.onclick = function () {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;
  if (emailInput.checkValidity()) {
    emailInput.style.borderColor = "green";
    const formData = new FormData();
    formData.append("email", email);

    for (const key in reportData) {
      if (reportData.hasOwnProperty(key)) {
        formData.append(key, reportData[key]);
      }
    }

    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      if (input.files.length > 0) {
        formData.append(input.name, input.files[0]);
      }
    });

    const reportTypeElement = document.querySelector(
      'input[name="reportType"]:checked'
    );
    if (reportTypeElement) {
      formData.append("reportType", reportTypeElement.value);
    }

    const collegeElement = document.getElementById("college");
    if (collegeElement) {
      formData.append("college", collegeElement.value);
    }

    fetch("/send_report", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        toggleSuccessMessage(true);
        dialog.style.display = "none";
      })
      .catch((error) => {
        toggleSuccessMessage(false);
      });
  } else {
    emailInput.style.borderColor = "red";
  }
};

function startReport() {
  reportType = document.querySelector(
    'input[name="reportType"]:checked'
  ).value;

  const region = document.getElementById("region").value;
  const collegeElement =
    document.getElementById("college") ||
    document.getElementById("otherCollege");
  let isValid = true;

  const college = collegeElement.value.trim();
  console.log(collegeElement.value);

  document
    .querySelectorAll(".input-error")
    .forEach((el) => el.classList.remove("input-error"));
  document
    .querySelectorAll(".label-error")
    .forEach((el) => el.classList.remove("label-error"));

  collegeElement.addEventListener("input", () => {
    collegeElement.classList.remove("input-error");
    const collegeLabel = document.querySelector('label[for="college"]');
    if (collegeLabel) {
      collegeLabel.classList.remove("label-error");
    }
  });

  if (college === "") {
    collegeElement.classList.add("input-error");
    const collegeLabel = document.querySelector('label[for="college"]');
    if (collegeLabel) {
      collegeLabel.classList.add("label-error");
    }
    isValid = false;
  }

  if (isValid) {
    document.getElementById("start").style.display = "none";
    document.getElementById("reportForm").style.display = "block";

    steps = stepsContent[reportType];
    renderSteps();
    updateStep(0);
  }
}

function renderSteps() {
  const stepsMenu = document.getElementById("stepsMenu");
  stepsMenu.innerHTML = "";
  steps.forEach((step, index) => {
    const li = document.createElement("li");
    li.classList.add(`formbold-step-menu${index + 1}`);
    if (index === 0) li.classList.add("active");
    li.innerHTML = `<span>${index + 1}</span> <p>${step.title}</p>`;
    stepsMenu.appendChild(li);
  });
}

function updateStep(nextStep) {
  document.querySelector(".formbold-steps").style.display = "block";

  const stepMenus = document.querySelectorAll(".formbold-steps li");
  stepMenus[currentStep].classList.remove("active");
  currentStep = nextStep;
  stepMenus[currentStep].classList.add("active");
  saveCurrentStepData();

  const formContent = document.getElementById("reportFormContent");
  formContent.innerHTML = steps[currentStep].content;

  restoreStepData();

  const backBtn = document.querySelector(".formbold-back-btn");
  const nextBtn = document.querySelector(".formbold-btn");
  const maxSteps = reportType === "maintenance" ? 3 : 4;

  backBtn.textContent = currentStep > 0 ? "رجوع" : "الغاء";
  nextBtn.textContent =
    currentStep < maxSteps ? "التالي" : "إنشاء التقرير";

  if (currentStep === maxSteps) {
    document.getElementById("openDialog").style.display = "flex";
  } else {
    document.getElementById("openDialog").style.display = "none";
  }
  const reportDateInput = document.getElementById("reportDate");
  if (reportDateInput) {
    const today = new Date().toISOString().split("T")[0];
    reportDateInput.value = today;
  }

  const targetInput = document.getElementById("target");
  const achievedInput = document.getElementById("achieved");
  if (targetInput && achievedInput) {
    targetInput.addEventListener("input", calculateAndUpdatePercentage);
    achievedInput.addEventListener("input", calculateAndUpdatePercentage);
  }

  const financialTable = document.getElementById("financialTable");
  if (financialTable) {
    const inputs = financialTable.querySelectorAll(
      'input[name^="revenueAmount"], input[name^="expenseAmount"]'
    );
    inputs.forEach((input) => {
      input.addEventListener("input", calculateTotals);
    });
    calculateTotals();
  }

  document.querySelectorAll('input[type="file"]').forEach((input) => {
    input.addEventListener("change", function () {
      const id = this.id;
      if (id === "stamp") {
        handleFilePreview(this, `stampPreview`);
      } else {
        handleFilePreview(this, `preview${id.charAt(id.length - 1)}`);
      }
    });
  });

  document
    .querySelectorAll(".error-message")
    .forEach((el) => el.remove());
  document
    .querySelectorAll(".input-error")
    .forEach((el) => el.classList.remove("input-error"));
}

function generateReport() {
  const formData = new FormData();

  for (const key in reportData) {
    if (reportData.hasOwnProperty(key)) {
      formData.append(key, reportData[key]);
    }
  }

  const reportTypeElement = document.querySelector(
    'input[name="reportType"]:checked'
  );
  if (reportTypeElement) {
    formData.append("reportType", reportTypeElement.value);
  } else {
    console.error("لم يتم اختيار نوع التقرير");
    return;
  }

  const collegeElement = document.getElementById("college");
  if (collegeElement) {
    formData.append("college", collegeElement.value);
  } else {
    console.error("لم يتم العثور على عنصر الكلية");
  }

  steps.forEach((step, stepIndex) => {
    const stepId = `step-${stepIndex}`;
    const stepContent = document.getElementById(stepId);
    if (stepContent) {
      const inputs = stepContent.querySelectorAll(
        "input, select, textarea"
      );
      inputs.forEach((input) => {
        if (input.type === "file") {
          if (input.files.length > 0) {
            formData.append(input.name, input.files[0]);
          }
        } else {
          formData.append(input.name, input.value);
        }
      });
    }
  });

  const stampElement = document.getElementById("stamp");
  if (stampElement && stampElement.files.length > 0) {
    formData.append("stamp", stampElement.files[0]);
  }

  for (let i = 1; i <= 4; i++) {
    const docKey = `documentation${i}`;
    const fileInput = document.getElementById(docKey);
    if (fileInput && fileInput.files.length > 0) {
      formData.append(docKey, fileInput.files[0]);
      console.log(`${docKey}: ${fileInput.files[0].name}`);
    } else if (i === 4) {
      const urlInput = document.getElementById(docKey);
      if (urlInput && urlInput.value) {
        formData.append(docKey, urlInput.value);
        console.log(`${docKey}: ${urlInput.value}`);
      }
    }
  }

  for (const pair of formData.entries()) {
    const value = pair[1] instanceof File ? `[كائن ملف]` : pair[1];
  }

  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  fetch("/generate_report", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.toString());

      if (data.success) {
        if (data.fileUrl) {
          window.location.href = data.fileUrl;
          toggleSuccessMessage(true);
        } else {
          toggleSuccessMessage(false);
          throw new Error("رابط الملف غير متوفر.");
        }
      } else {
        toggleSuccessMessage(false);
        console.log(data.message || data.error);

        throw new Error(data.error);
      }
    })
    .catch((error) => {
      toggleSuccessMessage(false);
      console.error("Error:", error);
    });
}

function validateStep() {
  const fields = document.querySelectorAll(
    "#reportFormContent input[required], #reportFormContent select[required], #reportFormContent textarea[required]"
  );
  let isValid = true;

  fields.forEach((field) => {
    const label = field.closest("div").querySelector("label");

    field.addEventListener("input", () => {
      field.classList.remove("input-error");
      if (label) {
        label.classList.remove("label-error");
      }
    });

    if (field.value.trim() === "") {
      field.classList.add("input-error");
      if (label) {
        label.classList.add("label-error");
      }
      isValid = false;
    }
  });

  return isValid;
}

function saveCurrentStepData() {
  const inputs = document.querySelectorAll(
    "form input, form textarea, form select"
  );
  inputs.forEach((input) => {
    if (input.type === "file") {
      if (input.files.length > 0) {
        reportData[input.name] = input.files[0];
      }
    } else {
      reportData[input.name] = input.value;
    }
  });
}

function restoreStepData() {
  const inputs = document.querySelectorAll(
    "#reportFormContent input, #reportFormContent textarea, #reportFormContent select"
  );
  inputs.forEach((input) => {
    if (input.type === "file") {
      if (input.files.length > 0) {
        console.log("input : " + input);

        handleFilePreview(
          input,
          `preview${input.id.charAt(input.id.length - 1)}`
        );
      }
    } else {
      if (reportData[input.name] !== undefined) {
        input.value = reportData[input.name];
      }
    }
  });
}

function handleFilePreview(input, previewId) {
  const file = input.files[0];
  const preview = document.getElementById(previewId);

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-width: 100%; height: auto; display:block" required />`;
    };

    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = "";
  }
}

function nextStep() {
  if (!validateStep()) return;
  const maxSteps = reportType === "maintenance" ? 3 : steps.length;

  if (currentStep < steps.length - 1) {
    updateStep(currentStep + 1);
  } else {
    saveCurrentStepData();
    generateReport();
  }
}

function prevStep() {
  if (currentStep > 0) {
    updateStep(currentStep - 1);
  } else {
    cancelReport();
  }
}

function cancelReport() {
  document.getElementById("college").selectedIndex = 0;
  document.getElementById("approver").value = "";
  document.getElementById("reporter").value = "";
  document.getElementById("congratulation-area").style.display = "none";
  document.getElementById("reportForm").style.display = "none";
  document.getElementById("start").style.display = "block";
  document.getElementById("stepsMenu").innerHTML = "";
  document.querySelector(".formbold-steps").style.display = "none";

  currentStep = 0;
  reportType = "";

  reportData = [];
  steps = [];
}

function toggleSuccessMessage(success) {
  document.getElementById("reportForm").style.display = "none";
  document.getElementById("stepsMenu").innerHTML = "";
  document.querySelector(".formbold-steps").style.display = "none";

  const congratulationArea = document.getElementById(
    "congratulation-area"
  );
  const congratulationTitle = document.querySelector(
    ".congratulation-contents-title"
  );
  const congratulationDescription = document.querySelector(
    ".congratulation-contents-para"
  );
  const congratulationIcon = document.querySelector(
    ".congratulation-contents-icon i"
  );
  const congratulationBackgroundIcon = document.querySelector(
    ".congratulation-contents-icon"
  );

  congratulationTitle.textContent = success
    ? "نجاح العملية"
    : "فشل العملية";
  congratulationDescription.textContent = success
    ? "تم إنشاء التقرير بنجاح"
    : "حدث خطأ أثناء إنشاء التقرير. الرجاء المحاولة مرة أخرى.";
  congratulationIcon.className = success
    ? "fas fa-check"
    : "fas fa-times";
  congratulationBackgroundIcon.style.background = success
    ? "#4caf50"
    : "#f44336";

  congratulationArea.style.display = success ? "block" : "none";
}

function handleSelectInput(selectId, inputId, buttonId) {
  var select = document.getElementById(selectId);
  var inputContainer = document.getElementById(inputId + "-container");

  if (select.value === "other") {
    select.remove();
    var input = document.createElement("input");
    input.type = "text";
    input.id = inputId;
    input.name = "institution";
    input.classList.add("formbold-form-input");
    input.placeholder = "أدخل الجهة";
    input.maxLength = 45;
    input.required = true;
    input.autocomplete = "off";
    inputContainer.appendChild(input);

    var button = document.createElement("button");
    button.id = buttonId;
    button.textContent = "القائمة";
    button.onclick = function () {
      resetSelectInput(selectId, inputId, buttonId);
    };
    inputContainer.appendChild(button);
  }
}

function handleResourcesSelectInput(selectId, inputId, buttonId) {
  var select = document.getElementById(selectId);
  var inputContainer = document.getElementById(inputId + "-container");

  if (select.value === "other") {
    select.remove();
    var input = document.createElement("input");
    input.type = "text";
    input.id = inputId;
    input.name = "resources";
    input.classList.add("formbold-form-input");
    input.placeholder = "أدخل الموارد المستخدمة";
    input.maxLength = 45;
    input.required = true;
    input.autocomplete = "off";
    inputContainer.appendChild(input);

    var button = document.createElement("button");
    button.id = buttonId;
    button.textContent = "القائمة";
    button.onclick = function () {
      resetResourcesSelect(selectId, inputId, buttonId);
    };
    inputContainer.appendChild(button);
  }
}

function handleRequestTypeSelect(selectId, inputId, buttonId) {
  var select = document.getElementById(selectId);
  var inputContainer = document.getElementById(inputId + "-container");

  if (select.value === "other") {
    select.remove();
    var input = document.createElement("input");
    input.type = "text";
    input.id = inputId;
    input.name = "requestType";
    input.classList.add("formbold-form-input");
    input.placeholder = "أدخل النوع";
    input.maxLength = 45;
    input.required = true;
    input.autocomplete = "off";
    inputContainer.appendChild(input);

    var button = document.createElement("button");
    button.id = buttonId;
    button.textContent = "القائمة";
    button.onclick = function () {
      resetRequestTypeSelect(selectId, inputId, buttonId);
    };
    inputContainer.appendChild(button);
  }
}
function handleCollegeSelectInput(selectId, inputId, buttonId) {
  var select = document.getElementById(selectId);
  var inputContainer = document.getElementById(inputId + "-container");

  if (select.value === "other") {
    select.remove();
    var input = document.createElement("input");
    input.type = "text";
    input.id = inputId;
    input.name = "college";
    input.classList.add("formbold-form-input");
    input.placeholder = "أدخل اسم المنشأة";
    input.maxLength = 50;
    input.autocomplete = "off";
    input.required = true;
    inputContainer.appendChild(input);

    var button = document.createElement("button");
    button.id = buttonId;
    button.textContent = "القائمة";
    button.onclick = function () {
      resetCollegeSelect(selectId, inputId, buttonId);
    };
    inputContainer.appendChild(button);
  }
}

function handleDepartmentSelect(selectId, inputId, buttonId) {
  var select = document.getElementById(selectId);
  var inputContainer = document.getElementById(inputId + "-container");

  if (select.value === "other") {
    select.remove();

    var input = document.createElement("input");
    input.type = "text";
    input.id = inputId;
    input.name = "department";
    input.classList.add("formbold-form-input");
    input.placeholder = "أدخل القسم";
    input.maxLength = 45;
    input.autocomplete = "off";

    inputContainer.appendChild(input);

    var button = document.createElement("button");
    button.id = buttonId;
    button.textContent = "القائمة";
    button.onclick = function () {
      resetDepartmentSelect(selectId, inputId, buttonId);
    };
    inputContainer.appendChild(button);
  }
}

function handlePerformanceIndicatorSelect(selectId, inputId, buttonId) {
  var select = document.getElementById(selectId);
  var inputContainer = document.getElementById(inputId + "-container");

  if (select.value === "other") {
    select.remove();

    var input = document.createElement("input");
    input.type = "text";
    input.id = inputId;
    input.name = "performanceIndicator";
    input.classList.add("formbold-form-input");
    input.placeholder = "أدخل مؤشر الأداء";
    input.maxLength = 45;
    input.autocomplete = "off";

    inputContainer.appendChild(input);

    var button = document.createElement("button");
    button.id = buttonId;
    button.textContent = "القائمة";
    button.onclick = function () {
      resetPerformanceIndicatorSelect(selectId, inputId, buttonId);
    };
    inputContainer.appendChild(button);
  }
}

function resetResourcesSelect(selectId, inputId, buttonId) {
  var input = document.getElementById(inputId);
  var inputContainer = document.getElementById(inputId + "-container");
  var button = document.getElementById(buttonId);

  if (input) input.remove();
  if (button) button.remove();

  var select = document.createElement("select");
  select.id = selectId;
  select.name = "resources";
  select.classList.add("formbold-form-input");
  select.setAttribute(
    "onchange",
    `handleResourcesSelectInput('${selectId}', '${inputId}', '${buttonId}')`
  );

  var options = `
              <option value="بشرية فقط">بشرية فقط</option>
              <option value="مادية فقط">مادية فقط</option>
              <option value="بشرية ومادية">بشرية ومادية</option>
              <option value="لا يوجد">لا يوجد</option>
              <option value="other">غير ذلك</option>
    `;
  select.innerHTML = options;
  inputContainer.appendChild(select);
}

function resetCollegeSelect(selectId, inputId, buttonId) {
  var input = document.getElementById(inputId);
  var inputContainer = document.getElementById(inputId + "-container");
  var button = document.getElementById(buttonId);

  if (input) input.remove();
  if (button) button.remove();

  var select = document.createElement("select");
  select.id = selectId;
  select.name = "college";
  select.classList.add("formbold-form-input");
  select.setAttribute(
    "onchange",
    `handleCollegeSelectInput('${selectId}', '${inputId}', '${buttonId}')`
  );

  var options = `
          <option value="الكلية التقنية بجدة">الكلية التقنية بجدة</option>
          <option value="other">غير ذلك</option>
    `;
  select.innerHTML = options;
  inputContainer.appendChild(select);
}

function resetRequestTypeSelect(selectId, inputId, buttonId) {
  var input = document.getElementById(inputId);
  var inputContainer = document.getElementById(inputId + "-container");
  var button = document.getElementById(buttonId);

  if (input) input.remove();
  if (button) button.remove();

  var select = document.createElement("select");
  select.id = selectId;
  select.name = "requestType";
  select.classList.add("formbold-form-input");
  select.setAttribute(
    "onchange",
    `handleRequestTypeSelect('${selectId}', '${inputId}', '${buttonId}')`
  );

  var options = `
        <option value="إضاءة">إضاءة</option>
        <option value="تكييف">تكييف</option>
        <option value="دهان">دهان</option>
        <option value="سباكة">سباكة</option>
        <option value="كهرباء">كهرباء</option>
        <option value="مصعد">مصعد</option>
        <option value="صيانة أجهزة حاسب آلي">صيانة أجهزة حاسب آلي</option>
        <option value="صيانة أجهزة عرض">صيانة أجهزة عرض</option>
        <option value="صيانة معمل">صيانة معمل</option>
        <option value="other">غير ذلك</option>
    `;
  select.innerHTML = options;
  inputContainer.appendChild(select);
}
function resetDepartmentSelect(selectId, inputId, buttonId) {
  var input = document.getElementById(inputId);
  var inputContainer = document.getElementById(inputId + "-container");
  var button = document.getElementById(buttonId);

  if (input) input.remove();
  if (button) button.remove();

  var select = document.createElement("select");
  select.id = selectId;
  select.name = "department";
  select.classList.add("formbold-form-input");
  select.setAttribute(
    "onchange",
    `handleDepartmentSelect('${selectId}', '${inputId}', '${buttonId}')`
  );

  var options = `
      <option value="إدارة الخدمات المساندة">إدارة الخدمات المساندة</option>
      <option value="وحدة الخدمات العامة">وحدة الخدمات العامة</option>
      <option value="وحدة السلامة والصحة المهنية">وحدة السلامة والصحة المهنية</option>
      <option value="وحدة تقنية المعلومات">وحدة تقنية المعلومات</option>
      <option value="other">غير ذلك</option>
    `;
  select.innerHTML = options;
  inputContainer.appendChild(select);
}
function resetSelectInput(selectId, inputId, buttonId) {
  var input = document.getElementById(inputId);
  var inputContainer = document.getElementById(inputId + "-container");
  var button = document.getElementById(buttonId);

  if (input) input.remove();
  if (button) button.remove();

  var select = document.createElement("select");
  select.id = selectId;
  select.name = "institution";
  select.classList.add("formbold-form-input");
  select.setAttribute(
    "onchange",
    `handleSelectInput('${selectId}', '${inputId}', '${buttonId}')`
  );

  var options = `
                          <option value="عمادة الكلية">عمادة الكلية</option>
                          <option value="وكالة الكلية للجودة">وكالة الكلية للجودة</option>
                          <option value="وكالة الكلية لشؤون المتدربين">وكالة الكلية لشؤون المتدربين</option>
                          <option value="وكالة الكلية لشؤون المدربين">وكالة الكلية لشؤون المدربين</option>
                          <option value="قسم تقنية الاعمال">قسم تقنية الاعمال</option>
                          <option value="قسم تقنية السياحة والضيافة">قسم تقنية السياحة والضيافة</option>
                          <option value="قسم التقنية المدنية والمعمارية">قسم التقنية المدنية والمعمارية</option>
                          <option value="قسم التقنية الكهربائية">قسم التقنية الكهربائية</option>
                          <option value="قسم التقنية الميكانيكية">قسم التقنية الميكانيكية</option>
                          <option value="قسم تقنية البيئة">قسم تقنية البيئة</option>
                          <option value="قسم الدراسات العامة">قسم الدراسات العامة</option>
                          <option value="قسم التنسيق الوظيفي">قسم التنسيق الوظيفي</option>
                          <option value="قسم القبول والتسجيل">قسم القبول والتسجيل</option>
                          <option value="قسم التدرب الإلكتروني">قسم التدرب الإلكتروني</option>
                          <option value="وحدة الإتصال المؤسسي">وحدة الإتصال المؤسسي</option>
                          <option value="وحدة التدريب التعاوني">وحدة التدريب التعاوني</option>
                          <option value="وحدة التوجيه والإرشاد">وحدة التوجيه والإرشاد</option>
                          <option value="وحدة تقنية المعلومات">وحدة تقنية المعلومات</option>
                          <option value="وحدة صندوق المتدربين">وحدة صندوق المتدربين</option>
                          <option value="وحدة السلامة والصحة المهنية">وحدة السلامة والصحة المهنية</option>
                          <option value="وحدة النشاط">وحدة النشاط</option>
                          <option value="مركز الموهبة والابتكار">مركز الموهبة والابتكار</option>
                          <option value="مركز الأعمال وخدمة المجتمع">مركز الأعمال وخدمة المجتمع</option>
                          <option value="إدارة الخدمات المساندة">إدارة الخدمات المساندة</option>
                          <option value="العيادة الطبية">العيادة الطبية</option>
                          <option value="المستودع">المستودع</option>
                          <option value="مطعم الكلية">مطعم الكلية</option>
                          <option value="مكتبة الكلية">مكتبة الكلية</option>
                          <option value="القرطاسية">القرطاسية</option>
                          <option value="other">غير ذلك</option>
    `;

  select.innerHTML = options;
  inputContainer.appendChild(select);
}
function resetPerformanceIndicatorSelect(selectId, inputId, buttonId) {
  var input = document.getElementById(inputId);
  var inputContainer = document.getElementById(inputId + "-container");
  var button = document.getElementById(buttonId);

  if (input) input.remove();
  if (button) button.remove();

  var select = document.createElement("select");
  select.id = selectId;
  select.name = "performanceIndicator";
  select.classList.add("formbold-form-input");
  select.setAttribute(
    "onchange",
    `handlePerformanceIndicatorSelect('${selectId}', '${inputId}', '${buttonId}')`
  );

  var options = `
      <option value="نسبة المدربين المستفيدين من الدورات التدريبية">نسبة المدربين المستفيدين من الدورات التدريبية</option>
      <option value="نسبة المدرب للمتدرب">نسبة المدرب للمتدرب</option>
      <option value="تكلفة المتدرب السنوية (ريال سعودي)">تكلفة المتدرب السنوية (ريال سعودي)</option>
      <option value="معدل التخرج حسب الدفعه (%)">معدل التخرج حسب الدفعه (%)</option>
      <option value="معدل التوظيف خلال 6 شهور من التخرج (%) ">معدل التوظيف خلال 6 شهور من التخرج (%) </option>
      <option value="عدد الخريجين (#)">عدد الخريجين (#)</option>
      <option value="عدد مذكرات التفاهم والشراكات  (#)">عدد مذكرات التفاهم والشراكات (#)</option>
      <option value="معدل التسرب للمتدربين (%)">معدل التسرب للمتدربين (%)</option>
      <option value="معدل التعثر">معدل التعثر</option>
      <option value="متوسط المعدل التراكمي GPA لمتدربي المنشأة التدريبية">متوسط المعدل التراكمي GPA لمتدربي المنشأة التدريبية</option>
      <option value="عدد المتدربين المشاركين في الأعمال التطوعيه والبرامج والفعاليات">عدد المتدربين المشاركين في الأعمال التطوعيه والبرامج والفعاليات</option>
      <option value="معدل رضا المدربين">معدل رضا المدربين</option>
      <option value="معدل الرضا الكلي للمتدربين">معدل الرضا الكلي للمتدربين</option>
      <option value="معدل الرضا الكلي لأصحاب العمل">معدل الرضا الكلي لأصحاب العمل</option>
      <option value="نسبة توفر الخدمات للمتدربين (%)">نسبة توفر الخدمات للمتدربين (%)</option>
      <option value="عدد المبتكرين والأفكار الإبداعية المطروحة من المنسوبين">عدد المبتكرين والأفكار الإبداعية المطروحة من المنسوبين</option>
      <option value="معدل «قياس» لمتدربي المنشأة التدريبية (درجة)">معدل «قياس» لمتدربي المنشأة التدريبية (درجة)</option>
      <option value="نسبة المتدربين من خريجي الثانوية العامة من المنطقة (%)">نسبة المتدربين من خريجي الثانوية العامة من المنطقة (%)</option>
      <option value="عدد المقبولين">عدد المقبولين</option>
      <option value="معدل تطبيق معايير الأمن والسلامة بالمنشأة التدريبية (%)">معدل تطبيق معايير الأمن والسلامة بالمنشأة التدريبية (%)</option>
      <option value="نسبة اشغال  المقاعد التدريبية">نسبة اشغال المقاعد التدريبية</option>
      <option value="نسبة المقبولين للمتقدمين">نسبة المقبولين للمتقدمين</option>
      <option value="معدل اشغال المرافق">معدل اشغال المرافق</option>
      <option value="متوسط النصاب التدريبي">متوسط النصاب التدريبي</option>
      <option value="other">غير ذلك</option>
    `;
  select.innerHTML = options;
  inputContainer.appendChild(select);
}

function calculatePercentage() {
  const target = parseFloat(document.getElementById("target").value) || 0;
  const achieved =
    parseFloat(document.getElementById("achieved").value) || 0;

  if (target > 0) {
    let percentage = (achieved / target) * 100;
    if (percentage > 100000) {
      percentage = 100000;
    }
    return percentage.toFixed(2) + "%";
  }
  return "0%";
}

function calculateTotals() {
  let totalRevenue = 0;
  let totalExpenses = 0;

  document.querySelectorAll("#financialTable tbody tr").forEach((row) => {
    const revenueAmount =
      parseFloat(
        row.querySelector('input[name^="revenueAmount"]').value
      ) || 0;
    const expenseAmount =
      parseFloat(
        row.querySelector('input[name^="expenseAmount"]').value
      ) || 0;

    totalRevenue += revenueAmount;
    totalExpenses += expenseAmount;

    let remainingAmount = revenueAmount - expenseAmount;
    let percentage =
      revenueAmount > 0
        ? (remainingAmount / revenueAmount).toFixed(2) * 100
        : 0;

    if (percentage > 100000) {
      percentage = 100000;
    }

    row.querySelector('input[name^="remainingAmount"]').value =
      remainingAmount;
    row.querySelector('input[name^="percentage"]').value =
      percentage.toFixed(2) + "%";
  });

  totalRevenue = totalRevenue > 1000000 ? 1000000 : totalRevenue;
  totalExpenses = totalExpenses > 1000000 ? 1000000 : totalExpenses;

  reportData["totalRevenue"] = totalRevenue;
  reportData["totalExpenses"] = totalExpenses;
  reportData["totalRemaining"] = totalRevenue - totalExpenses;

  let totalPercentage =
    totalRevenue > 0
      ? ((totalRevenue - totalExpenses) / totalRevenue) * 100
      : "0%";

  if (totalPercentage > 100000) {
    totalPercentage = 100000;
  }

  reportData["totalPercentage"] = totalPercentage.toFixed(2);
}

function calculateAndUpdatePercentage() {
  const percentage = calculatePercentage();
  const percentageInput = document.getElementById("percentage");
  if (percentageInput) {
    percentageInput.value = percentage;
  }
}
</script>



<template>
<div class="formbold-main-wrapper">
        <div id="start" class="formbold-form-wrapper">
            <div class="start-left">
                <div class="header">
                    <img src="{{ asset('images/logo.png') }}" alt="Logo"> <!-- Use Laravel's asset helper -->
                </div>

                <label for="region" class="formbold-form-label">المنطقة الإدارية:</label>
                <select id="region" name="region" class="formbold-form-input">
                    <option value="الباحة">الباحة</option>
                    <option value="الجوف">الجوف</option>
                    <option value="الحدود الشمالية">الحدود الشمالية</option>
                    <option value="الرياض">الرياض</option>
                    <option value="الشرقية">الشرقية</option>
                    <option value="القصيم">القصيم</option>
                    <option value="المدينة المنورة">المدينة المنورة</option>
                    <option value="تبوك">تبوك</option>
                    <option value="جازان">جازان</option>
                    <option value="حائل">حائل</option>
                    <option value="عسير">عسير</option>
                    <option value="مكة المكرمة">مكة المكرمة</option>
                    <option value="نجران">نجران</option>
                </select>

                <label for="college" class="formbold-form-label">اسم المنشأة:</label>
                <div id="otherCollege-container">
                    <select id="college" name="college" class="formbold-form-input" onchange="handleCollegeSelectInput('college', 'otherCollege', 'resetCollege')" required>
                        <option value="الكلية التقنية بجدة">الكلية التقنية بجدة</option>
                        <option value="other">غير ذلك</option>
                    </select>
                    <div class="btn-reset" id="otherCollege-container"></div>
                </div>

                <div>
                    <label class="formbold-form-label">نوع التقرير:</label>
                    <div class="radio-group">
                        <div>
                            <input type="radio" id="achievement" name="reportType" value="achievement" checked />
                            <label for="achievement" style="text-align: center">تقرير إنجاز</label>
                        </div>
                        <div>
                            <input type="radio" id="financial" name="reportType" value="financial" />
                            <label for="financial" style="text-align: center">تقرير مالي</label>
                        </div>
                        <div>
                            <input type="radio" id="maintenance" name="reportType" value="maintenance" />
                            <label for="maintenance" style="text-align: center">تقرير صيانة</label>
                        </div>
                    </div>
                </div>

                <button class="formbold-btn-start" onclick="startReport()">بدء التقرير</button>
                <div class="start-right">
                
                    <ul>
                    
                    </ul>
                </div>
                <div style="text-align: center">
                    <span style="color: #515152">اعداد وكالة الجودة بالكلية التقنية بجدة - ٢٠٢٤</span>
                </div>
            </div>
        </div>
        <div class="formbold-steps">
            <ul id="stepsMenu"></ul>
        </div>
        <div id="reportForm" class="formbold-form-wrapper" style="display: none">
            <form id="reportFormContent"></form>
            <div class="formbold-form-btn-wrapper">
                <button class="formbold-back-btn" onclick="prevStep()">رجوع</button>
                <button id="openDialog" class="formbold-email-btn">
                    <img src="{{ asset('images/email.png') }}" width="28px" alt="Email Icon">
                </button>
                <button class="formbold-btn" onclick="nextStep()">التالي</button>
            </div>
        </div>
        <div id="congratulation-area" class="congratulation-area formbold-form-wrapper" style="display: none">
            <div class="container">
                <div class="congratulation-wrapper">
                    <div class="congratulation-contents center-text">
                        <div class="header">
                            <img src="{{ asset('images/logo.png') }}" alt="Logo">
                        </div>
                        <div class="congratulation-contents-icon">
                            <i class="fas fa-check"></i>
                        </div>
                        <h4 class="congratulation-contents-title">نجاح العملية</h4>
                        <p class="congratulation-contents-para">تم إنشاء التقرير بنجاح.</p>
                        <div class="btn-wrapper mt-4">
                            <button class="formbold-home-btn" onclick="cancelReport()">العودة الى الصفحة الرئيسية</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="dialog" class="dialog">
            <div class="dialog-content">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <h2>أدخل بريدك الإلكتروني</h2>
                    <span class="close" id="closeDialog">&times;</span>
                </div>
                <input type="email" id="emailInput" placeholder="البريد الإلكتروني" class="formbold-form-input" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                <button id="sendEmail">إرسال التقرير</button>
            </div>
        </div>
    </div>

</template>
