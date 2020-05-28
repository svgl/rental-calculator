<template>
  <div id="app" class="min-h-screen antialiased text-gray-900 bg-gray-100">
    <main class="px-8 py-4">
      <h1 class="font-bold tracking-wide text-lg text-center">Rental Calculator</h1>
      <div class="max-w-lg">
        <section class="py-4">
          <!-- property info -->
          <h3 class="text-center text-gray-700">Property</h3>
          <div class="mt-4 flex items-center justify-center">
            <div class="h-32 w-48 text-gray-600 text-center bg-gray-300 border-2 border-dashed border-gray-500 flex items-center justify-center">
              <!-- image placeholder -->
              Property Image
            </div>
          </div>
          <label class="inline-block mt-4" for="address">Address</label>
          <input v-model="address" class="block mt-1 px-2 py-1 w-full border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="text" name="address" placeholder="Address" />
        </section>
        <section class="py-4">
          <!-- purchase info -->
          <h3 class="text-center text-gray-700">Purchase</h3>
          <label class="inline-block mt-4" for="purchase_price">Purchase Price</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <input v-model.number="purchase_price" class="block w-full pl-8 pr-2 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="100000" name="purchase_price" />
          </div>
          <label class="inline-block mt-4" for="purchase_closing_costs">Purchase Closing Costs</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <input v-model.number="purchase_closing_costs" class="block w-full pl-8 pr-2 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="2000" name="purchase_closing_costs" />
          </div>
          <label class="inline-block mt-4" for="repair_costs">Repair Costs</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <input v-model.number="repair_costs" class="block w-full pl-8 pr-2 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="5000" name="repair_costs" />
          </div>
        </section>
        <section class="py-4">
          <!-- Loan details -->
          <h3 class="text-center text-gray-700">Loan Details</h3>
          <label class="inline-block mt-4" for="loan_amount">Loan Amount</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <input v-model.number="loan_amount" class="block w-full pl-8 pr-2 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="80000" name="loan_amount" />
          </div>
          <label class="inline-block mt-4" for="interest_rate">Interest Rate</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">%</span>
            </div>
            <input v-bind:value="decimalToPercent(interest_rate)" v-on:input="interest_rate = $event.target.value / 100" class="block pl-2 pr-8 py-1 w-full border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="5" name="interest_rate" />
          </div>
          <label class="inline-block mt-4" for="loan_term">Loan Term</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">years</span>
            </div>
            <input v-model.number="loan_term" class="block w-full pl-2 pr-16 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="30" name="loan_term" />
          </div>
        </section>
        <section class="py-4">
          <!-- rental income -->
          <h3 class="text-center text-gray-700">Rental Income</h3>
          <label for="gross_monthly_income" class="inline-block mt-4">Gross Monthly Income</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <input v-model.number="gross_monthly_income" class="block w-full pl-8 pr-2 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="1200" name="gross_monthly_income" />
          </div>
        </section>
        <section class="py-4">
          <!-- expenses -->
          <h3 class="text-center text-gray-700">Expenses</h3>
          <label for="property_taxes" class="inline-block mt-4">Property Taxes</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/yr</span>
            </div>
            <input v-model.number="property_taxes" class="block w-full pl-8 pr-10 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="2000" name="property_taxes" />
          </div>
          <label for="insurance" class="inline-block mt-4">Insurance</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/yr</span>
            </div>
            <input v-model.number="insurance" class="block w-full pl-8 pr-10 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="1000" name="insurance" />
          </div>
          <p class="mt-4 text-xs text-gray-600 leading-tight">Repairs & maintenance, vacancy, capital expenditures, and management fees are expressed as a percentage of gross monthly income.</p>
          <label for="repairs_and_maintenance" class="inline-block mt-4">Repairs and Maintenance</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">%</span>
            </div>
            <input v-bind:value="decimalToPercent(repairs_and_maintenance)" v-on:input="repairs_and_maintenance = $event.target.value / 100" class="block w-full pl-2 pr-8 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="8" name="repairs_and_maintenance" />
          </div>
          <label for="vacancy" class="inline-block mt-4">Vacancy</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">%</span>
            </div>
            <input v-bind:value="decimalToPercent(vacancy)" v-on:input="vacancy = $event.target.value / 100" class="block w-full pl-2 pr-8 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="5" name="vacancy" />
          </div>
          <label for="capital_expenditures" class="inline-block mt-4">Capital Expenditures</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">%</span>
            </div>
            <input v-bind:value="decimalToPercent(capital_expenditures)" v-on:input="capital_expenditures = $event.target.value / 100" class="block w-full pl-2 pr-8 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="8" name="capital_expenditures" />
          </div>
          <label for="management_fees" class="inline-block mt-4">Management Fees</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">%</span>
            </div>
            <input v-bind:value="decimalToPercent(management_fees)" v-on:input="management_fees = $event.target.value / 100" class="block w-full pl-2 pr-8 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="9" name="management_fees" />
          </div>
          <label for="electricity" class="inline-block mt-4">Electricity</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/mo</span>
            </div>
            <input v-model.number="electricity" class="block w-full pl-8 pr-12 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="0" name="electricity" />
          </div>
          <label for="gas" class="inline-block mt-4">Gas</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/mo</span>
            </div>
            <input v-model.number="gas" class="block w-full pl-8 pr-12 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="0" name="gas" />
          </div>
          <label for="water_and_sewer" class="inline-block mt-4">Water and Sewer</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/mo</span>
            </div>
            <input v-model.number="water_and_sewer" class="block w-full pl-8 pr-12 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="0" name="water_and_sewer" />
          </div>
          <label for="hoa_fees" class="inline-block mt-4">HOA Fees</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/mo</span>
            </div>
            <input v-model.number="hoa_fees" class="block w-full pl-8 pr-12 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="0" name="hoa_fees" />
          </div>
          <label for="garbage" class="inline-block mt-4">Garbage</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/mo</span>
            </div>
            <input v-model.number="garbage" class="block w-full pl-8 pr-12 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="0" name="garbage" />
          </div>
          <label for="other" class="inline-block mt-4">Other</label>
          <div class="relative mt-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-600 pointer-events-none">$</span>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-3">
              <span class="text-gray-600 pointer-events-none">/mo</span>
            </div>
            <input v-model.number="other" class="block w-full pl-8 pr-12 py-1 border-b-2 border-gray-400 bg-gray-200 focus:outline-none focus:border-blue-400" type="number" inputmode="numeric" placeholder="0" name="other" />
          </div>
          <button class="w-full mt-4 py-2 bg-indigo-500 text-gray-100 border-b-4 border-indigo-600 hover:bg-indigo-600 hover:border-indigo-700">Analyze</button>
        </section>
      </div>
      <section>
        <h3>Cash Flow</h3>
        <div>{{ cash_flow }}</div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function() {
    return {
      address: "",

      purchase_price: null,
      purchase_closing_costs: null,
      repair_costs: null,

      loan_amount: null,
      interest_rate: null,
      loan_term: null,

      gross_monthly_income: null,
      property_taxes: null,
      insurance: null,
      repairs_and_maintenance: null,
      vacancy: null,
      capital_expenditures: null,
      management_fees: null,
      electricity: null,
      gas: null,
      water_and_sewer: null,
      hoa_fees: null,
      garbage: null,
      other: null,

      decimalToPercent: function(value) {
        if (!value) {
          return null;
        }
        return value * 100;
      }
    };
  },
  computed: {
    cash_flow() {
      let income = this.gross_monthly_income;
      let expenses = 0;
      expenses += this.property_taxes / 12;
      expenses += this.insurance / 12;
      expenses += this.repairs_and_maintenance * income;
      expenses += this.vacancy * income;
      expenses += this.capital_expenditures * income;
      expenses += this.management_fees * income;
      expenses += this.electricity;
      expenses += this.gas;
      expenses += this.water_and_sewer;
      expenses += this.hoa_fees;
      expenses += this.garbage;
      expenses += this.other;

      return income - expenses;
    }
  }
};
</script>

<style src="./assets/tailwind.config.css"></style>
