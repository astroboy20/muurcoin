@php
	use Illuminate\Support\Str;
	use Carbon\Carbon;
	use Carbon\CarbonInterval;
	$changeCoinFunc = 'a' . Str::random(6);
	$changeWalletFunc = 'b' . Str::random(6);
	$formQuantity = 'c' . Str::random(20);
	$formTime = 'd' . Str::random(6);
	$currentPCoin = 'e' . Str::random(6);
	$currentPWallet = 'f' . Str::random(6);
	$currentPTime = 'g' . Str::random(6);
	$currentPTimeSubUnit = 'h' . Str::random(6);
	$currentPTimeSubTime = 'i' . Str::random(6);
	$formSubmit = 'j' . Str::random(6);
	$timer = 'k' . Str::random(13);
	$coin_shortcuts = $fiats->select('symbol')->pluck('symbol');
	$wallet_shortcuts = [
	    1 => 'USD',
	    2 => 'EUR',
	    3 => 'GBP',
	    4 => 'AED',
	    5 => 'AUD',
	    6 => 'CAD',
	    7 => 'CNY',
	    8 => 'JPY',
	    9 => 'KWD',
	    10 => 'BHD',
	    11 => 'OMR',
	    12 => 'JOD',
	    13 => 'KYD',
	    14 => 'GIP',
	    15 => 'CHF',
	];

	function getProfitLoss($trade, $hl, $rate, $res, $rig)
	{
	    if ($rig == 1) {
	        $result = 'win';
	        $outcome = $trade * ($rate / 100);
	    } elseif ($rig == 2) {
	        $result = 'draw';
	        $outcome = 0.0;
	    } elseif ($rig == 3) {
	        $result = 'loss';
	        $outcome = $trade;
	    } else {
	        if ($res == 1) {
	            $result = 'win';
	            $outcome = $trade * ($rate / 100);
	        } elseif ($res == 2) {
	            $result = 'loss';
	            $outcome = $trade;
	        } else {
	            $result = 'draw';
	            $outcome = 0.0;
	        }
	    }
	    $outcome = number_format($outcome, 8);
	    return compact('outcome', 'result');
	}
	function formatTimeToShortString($timeValue)
	{
	    $totalSeconds = $timeValue;

	    if ($totalSeconds >= 86400) {
	        $days = floor($totalSeconds / 86400);
	        return $days . 'd';
	    } elseif ($totalSeconds >= 3600) {
	        $hours = floor($totalSeconds / 3600);
	        return $hours . 'h';
	    } elseif ($totalSeconds >= 60) {
	        $minutes = floor($totalSeconds / 60);
	        return $minutes . 'm';
	    } else {
	        return $totalSeconds . 's';
	    }
	}

@endphp
@extends($activeTemplate . 'layouts.sage')
@section('content')
	<div class="not_a_container">
		<div class="row gx-2 mob_gy5">
			<div class="col-lg-9">
				<div class="card">
					<ul class="trade_coin_tab_nav">
						@foreach ($coin_shortcuts as $coin)
							<li>
								<a class="link @if ($coin == 'USD') active @endif" id="trad_ref_{{ $coin }}"
									onclick="{{ $changeCoinFunc }}('{{ $coin }}')">{{ $coin }}</a>
							</li>
						@endforeach
					</ul>
				</div>
				<div class="card trading-view mt-2">
					<div class="tab-content pt-50">

						<div class="tab-pane fade show active" id="expert">
							<div class="chart-wrapper">
								<div class="chart">
									<div class="card custom--card h-100">
										<div class="not_card-body">
											<div class="tradingview-widget-container">
												<div id="expert_chart"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card trading-view mt-2" style="display: flex; min-height: 200px; overflow-x: auto;">
					<div style="flex: 1">
						<ul class="nav nav-tabs px-2 py-2" id="trx_tabs_" role="tablist" style="display: flex;column-gap: 10px;">
							<li class="nav-item">
								<a class="trx_tab_link active" id="transactions-tab" data-toggle="tab" href="#transactions" role="tab"
									aria-controls="transactions" aria-selected="true">Transactions</a>
							</li>
							<li class="nav-item">
								<a class="trx_tab_link" id="closed-tab" data-toggle="tab" href="#closed" role="tab" aria-controls="closed"
									aria-selected="false">Closed</a>
							</li>
						</ul>

						<div class="tab-content" id="trx_tabs_Content">
							<div class="tab-pane fade show active" id="transactions" role="tabpanel" aria-labelledby="transactions-tab">
								<table class="table-borderless table">
									<thead>
										<tr>
											<th scope="col">Pair</th>
											<th scope="col">Quantity</th>
											<th scope="col">Purchase Price</th>
											<th scope="col">Timer</th>
										</tr>
									</thead>
									<tbody>
										@if ($log->count() < 1)
											<tr>
												<td colspan="5">
													<center>No data, yet.</center>
												</td>
											</tr>
										@endif
										@foreach ($log as $trade)
											<tr>
												<td>{{ $wallet_shortcuts[$trade->wallet] }}/{{ $trade->fiat }}
													{{ formatTimeToShortString($trade->duration) }}</td>
												<td>{{ number_format($trade->amount, 6) }}</td>
												<td>{{ number_format($trade->price_was, 6) }}</td>
												<td>
													<div id="{{ $timer }}_trade_timer_{{ $trade->id }}"></div>
												</td>
											</tr>
										@endforeach
									</tbody>
								</table>
								@if ($log->hasPages())
									<div style="display: flex; justify-content: center;">{{ paginateLinks($log) }}</div>
								@endif
							</div>
							<div class="tab-pane fade" id="closed" role="tabpanel" aria-labelledby="closed-tab">
								<table class="table-borderless table">
									<thead>
										<tr>
											<th scope="col">Pair</th>
											<th scope="col">Quantity</th>
											<th scope="col">Purchase Price</th>
											<th scope="col">Transaction Price</th>
											<th scope="col">Handling fee</th>
											<th scope="col">Profit / Loss</th>
											<th scope="col">Date</th>
										</tr>
									</thead>
									<tbody>
										@if ($log2->count() < 1)
											<tr>
												<td colspan="5">
													<center>No data, yet.</center>
												</td>
											</tr>
										@endif
										@foreach ($log2 as $trade)
											@php
												$res = getProfitLoss($trade->amount, $trade->high_low == 1, $trade->profit, $trade->result, $trade->rig);
											@endphp
											<tr>
												<td>{{ $wallet_shortcuts[$trade->wallet] }}/{{ $trade->fiat }}
													{{ formatTimeToShortString($trade->duration) }}</td>
												<td>{{ number_format($trade->amount, 6) }}</td>
												<td>{{ number_format($trade->price_was, 6) }}</td>
												<td>{{ number_format($trade->price_is, 6) }}</td>
												<td>{{ number_format(0.0, 6) }}</td>
												<td
													class="@if ($res['result'] == 'win') closed_tab_win @endif @if ($res['result'] == 'loss') closed_tab_loss @endif">
													@if ($res['result'] == 'loss')
														-
													@else
														+
													@endif{{ $res['outcome'] }}
												</td>
												<td>{{ $trade->created_at }} GMT</td>
											</tr>
										@endforeach
									</tbody>
								</table>
								@if ($log2->hasPages())
									<div style="display: flex; justify-content: center;">{{ paginateLinks($log2) }}</div>
								@endif
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-3">
				<div>
					<div class="card px-1 py-2 text-center align-middle">
						<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2"><i
									class="fa fa-solid fa-check"></i></span>Transaction wallet</p>
					</div>
					<div class="row gx-2 mt-1 text-center align-middle">
						@foreach ($wallet_shortcuts as $id => $wallet)
							<div class="col-4 mb-1" onclick="{{ $changeWalletFunc }}({{ $id }})">
								<div class="card wallet_tab @if ($id == 1) active @endif" id="wallt_ref_{{ $wallet }}">
									{{ $wallet }}</div>
							</div>
						@endforeach

					</div>

					{{-- <div class="row gx-2 mt-1 text-center align-middle">
						@foreach ($untradeables as $coin)
							<div class="col-4 my-1" id="{{ $coin }}-btn"
								onclick="notify('error', '{{ strtoupper($coin) }} is currently not available for fiat, please use EUR, USD, GBP')">
								<div class="card wallet_tab">{{ $coin }}</div>
							</div>
						@endforeach
					</div> --}}
				</div>
				<div class="card mt-2 px-1 py-2 text-center align-middle">
					<p style="font-size: 14px;"> <span class="icon_dot mx-1"><i class="fa fa-solid fa-check"></i></span>
						Wallet Balance</p>
					<p id="wallt_balance_tx">{{ number_format($balances['USD'], 8) }} USD</p>
				</div>
				<div>
					<div class="card mt-2 px-1 py-2 text-center align-middle">
						<p class="m-0" style="font-size: 14px;"> <span class="icon_dot mx-2"><i
									class="fa fa-solid fa-check"></i></span>Transaction details</p>
					</div>
					<p class="m-0 mt-1" style="font-size: 14px;">Opening Quantity:</p>
					<div class="mt-2 text-center align-middle">
						<input class="opqty" id="{{ $formQuantity }}" name="{{ $formQuantity }}" type="number" step="any"
							placeholder="Enter opening quantity">
					</div>
					<p class="m-0 mt-1" style="font-size: 14px;">Open Time:</p>
					<div class="opentimes mb-2 mt-2 text-center align-middle">
						@foreach ($durations as $time)
							<div>
								<div class="card opentimitem" id="trx_time_ref_{{ $time->id }}"
									onclick="{{ $formTime }}({{ $time->id }}, '{{ $time->unit }}', '{{ $time->time }}')">
									{{ $time->time }}{{ $time->unit[0] }}</div>
								<b style="font-size: 11px; font-weight: 200; color: #97a2c0">{{ number_format($time->profit, 2) }}%</b>
							</div>
						@endforeach
					</div>
					<div class="mt-2">
						<p class="m-0 mt-1" style="font-size: 14px;">Swiping:</p>
						<div class="table-responsive">
							<table class="table-borderless table">
								<tbody>
									<tr>
										<td style="color: white !important;">Balance</td>
										<td id="wallt_balance_tx_r2" style="color: white !important;">
											{{ number_format($balances['USD'], 8) }} USD</td>
									</tr>
									<tr>
										<td style="color: white !important;">Minimum Opening Quantity</td>
										<td id="opqty_r2" style="color: white !important;">-</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="buy_trx_ctn mt-2 px-5">
						<button class="buy_trx mb-1 mt-2" type="button" style="background-color: green;"
							onclick="{{ $formSubmit }}(1)">Buy up</button>
						<button class="buy_trx mb-2" type="button" style="background-color: red;"
							onclick="{{ $formSubmit }}(2)">Buy down</button>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection

@push('script')
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
	<script src="/assets/templates/basic/js/easytimer.min.js"></script>
	<script>
		"use strict";
		new TradingView.widget({
			"width": 980,
			"height": 610,
			"symbol": "EUR" + "{{ $coin_shortcuts[0] }}",
			"interval": "D",
			"timezone": "Etc/UTC",
			"theme": "dark",
			"style": "1",
			"locale": "en",
			"enable_publishing": false,
			"hide_side_toolbar": false,
			"allow_symbol_change": true,
			"details": true,
			"show_popup_button": true,
			"popup_width": "1000",
			"popup_height": "650",

			"container_id": "expert_chart"
		});
	</script>
	<script>
		var {{ $currentPCoin }} = '{{ $coin_shortcuts[0] }}';
		var {{ $currentPWallet }} = 1;
		var {{ $currentPTime }};
		var {{ $currentPTimeSubUnit }};
		var {{ $currentPTimeSubTime }};
		const wallets = [
			'USD',
			'EUR',
			'GBP',
			'AED',
			'AUD',
			'CAD',
			'CNY',
			'JPY',
			'KWD',
			'BHD',
			'OMR',
			'JOD',
			'KYD',
			'GIP',
			'CHF'
		];
		const balances = [
			@foreach ($wallet_shortcuts as $id => $wallet)
				'{{ number_format($balances[$wallet], 8) }}',
			@endforeach
		];
		const balances_val = [
			@foreach ($wallet_shortcuts as $id => $wallet)
				{{ $balances[$wallet] }},
			@endforeach
		];
		const minimums = {
			@foreach ($durations as $time)
				{{ $time->id }}: {
					@foreach (json_decode($time->minimum, true) as $wallet => $minm)
						'{{ $wallet }}': {{ $minm }},
					@endforeach
				},
			@endforeach
		};

		function setOpqty() {
			document.getElementById('opqty_r2').innerText = minimums[{{ $currentPTime }}][wallets[{{ $currentPWallet }} -
				1]] + ' ' + wallets[{{ $currentPWallet }} - 1];
		}

		function {{ $formSubmit }}(highlow) {
			if (highlow >= 1 && highlow <= 2) {
				quantity = document.getElementById('{{ $formQuantity }}').value;
				if (quantity != null && {{ $currentPTime }} != null && {{ $currentPTimeSubUnit }} != null &&
					{{ $currentPTimeSubTime }} != null) {
					if (quantity >= minimums[{{ $currentPTime }}][wallets[{{ $currentPWallet }} - 1]]) {
						$('input[name="{{ $formQuantity }}"]').val("");
						$.ajax({
							headers: {
								"X-CSRF-TOKEN": "{{ csrf_token() }}",
							},
							url: "{{ route('user.fiat.store') }}",
							method: "POST",
							data: {
								amount: quantity,
								fiat: {{ $currentPCoin }},
								high_low_type: highlow,
								duration: {{ $currentPTimeSubTime }},
								unit: {{ $currentPTimeSubUnit }},
								wallet: {{ $currentPWallet }},
							},
							success: function(response) {
								if (response.success) {
									window.location.reload();
								} else {
									notify('error', response.errors)
								}
							}
						});
					} else {
						notify('error', 'You can\'t trade less than ' + minimums[{{ $currentPTime }}][wallets[
							{{ $currentPWallet }} - 1]] + ' ' + wallets[
							{{ $currentPWallet }} - 1] + ' for this time');
					}
				} else {
					if (quantity == null) {
						notify('error', 'Invalid Opening Quantity.');
					} else if (!({{ $currentPTime }} != null && {{ $currentPTimeSubUnit }} != null &&
							{{ $currentPTimeSubTime }} != null)) {
						notify('error', 'Invalid Transaction Settings.');
					}
				}
			}
		}

		function {{ $formTime }}(change, unit, time) {
			try {
				document.getElementById('trx_time_ref_' + change).classList.add('active');
				document.getElementById('trx_time_ref_' + {{ $currentPTime }}).classList.remove('active');
			} catch (error) {
				//
			}
			{{ $currentPTime }} = change;
			{{ $currentPTimeSubUnit }} = unit;
			{{ $currentPTimeSubTime }} = time;
			setOpqty();
		}

		function {{ $changeWalletFunc }}(change) {
			if (change >= 1 && change <= 15) {
				new TradingView.widget({
					"width": 980,
					"height": 610,
					"symbol": wallets[change - 1] === 'USD' ? 'EUR' + wallets[change - 1] : {{ $currentPCoin }} +
						wallets[change - 1],
					"interval": "D",
					"timezone": "Etc/UTC",
					"theme": "dark",
					"style": "1",
					"locale": "en",
					"enable_publishing": false,
					"hide_side_toolbar": false,
					"allow_symbol_change": true,
					"details": true,
					"show_popup_button": true,
					"popup_width": "1000",
					"popup_height": "650",
					"container_id": "expert_chart"
				});
				document.getElementById('wallt_ref_' + wallets[{{ $currentPWallet }} - 1]).classList.remove('active');
				document.getElementById('wallt_ref_' + wallets[change - 1]).classList.add('active');
				document.getElementById('wallt_balance_tx').innerText = balances[change - 1] + ' ' + wallets[
					change - 1];
				document.getElementById('wallt_balance_tx_r2').innerText = balances[change - 1] + ' ' + wallets[
					change - 1];
				{{ $currentPWallet }} = change;
				setOpqty();
			}
		}

		function {{ $changeCoinFunc }}(change) {
			new TradingView.widget({
				"width": 980,
				"height": 610,
				"symbol": wallets[{{ $currentPWallet }} - 1] + change,
				"interval": "D",
				"timezone": "Etc/UTC",
				"theme": "dark",
				"style": "1",
				"locale": "en",
				"toolbar_bg": "#f1f3f6",
				"enable_publishing": false,
				"allow_symbol_change": false,
				"overrides": {
					"paneProperties": {
						"background": "#FF0000",
					},
				},
				"container_id": "expert_chart"
			});
			document.getElementById('trad_ref_' + {{ $currentPCoin }}).classList.remove('active');
			document.getElementById('trad_ref_' + change).classList.add('active');
			{{ $currentPCoin }} = change;
			setOpqty();
		}
	</script>
	<script>
		@foreach ($log as $trade)
			// Timer {{ $trade->id }}
			@php
				$durationInSeconds = Carbon::parse($trade->in_time)->isPast() ? 5 : Carbon::parse($trade->in_time)->diffInSeconds(Carbon::now());

				$cu_days = floor($durationInSeconds / (24 * 3600));
				$remainingSeconds = $durationInSeconds - $cu_days * 24 * 3600;
				$cu_hours = floor($remainingSeconds / 3600);
				$remainingSeconds -= $cu_hours * 3600;
				$cu_minutes = floor($remainingSeconds / 60);
				$cu_seconds = $remainingSeconds % 60;
			@endphp
			var {{ $timer }}_trade_timer_{{ $trade->id }} = new easytimer.Timer();
			{{ $timer }}_trade_timer_{{ $trade->id }}.start({
				countdown: true,
				startValues: {
					days: {{ $cu_days }},
					hours: {{ $cu_hours }},
					minutes: {{ $cu_minutes }},
					seconds: {{ $cu_seconds }}
				}
			});
			$('#{{ $timer }}_trade_timer_{{ $trade->id }}').html(
				{{ $timer }}_trade_timer_{{ $trade->id }}.getTimeValues().toString());
			{{ $timer }}_trade_timer_{{ $trade->id }}.addEventListener('secondsUpdated', function(e) {
				$('#{{ $timer }}_trade_timer_{{ $trade->id }}').html(
					{{ $timer }}_trade_timer_{{ $trade->id }}.getTimeValues().toString());
			});

			{{ $timer }}_trade_timer_{{ $trade->id }}.addEventListener('targetAchieved', function(e) {
				$.ajax({
					headers: {
						"X-CSRF-TOKEN": "{{ csrf_token() }}",
					},
					url: "{{ route('user.fiat.result') }}",
					method: "POST",
					data: {
						game_log_id: {{ $trade->id }}
					},
					success: function(response) {
						if (response.success) {
							notify('success', response.message || '');
						} else {
							notify('error', response.errors || '')
						}
						setTimeout(function() {
							window.location.reload();
						}, 1000);
					}
				});
			});
		@endforeach
	</script>
@endpush
